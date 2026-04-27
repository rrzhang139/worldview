const PILLAR_ORDER = ["Macro & Capital", "China", "Geopolitics", "AI & Tech"];

let manifest = null;

async function loadManifest() {
  const res = await fetch("manifest.json");
  manifest = await res.json();
  document.getElementById("manifest-stats").textContent =
    `${manifest.themes.length} themes · ${manifest.briefs.length} briefs`;
  renderThemeNav();
}

function renderThemeNav() {
  const container = document.getElementById("theme-nav");
  container.innerHTML = "";
  const byPillar = {};
  for (const t of manifest.themes) {
    (byPillar[t.pillar] ??= []).push(t);
  }
  for (const pillar of PILLAR_ORDER) {
    const themes = byPillar[pillar];
    if (!themes) continue;
    const wrap = document.createElement("div");
    wrap.className = "pillar";
    wrap.dataset.pillar = pillar;
    wrap.innerHTML = `<div class="pillar-title">${pillar}</div>`;
    for (const t of themes) {
      const btn = document.createElement("button");
      btn.className = "theme-link";
      btn.textContent = t.title;
      btn.dataset.themeId = t.id;
      btn.onclick = () => showTheme(t);
      wrap.appendChild(btn);
    }
    container.appendChild(wrap);
  }
}

function clearActive() {
  document.querySelectorAll(".active").forEach(el => el.classList.remove("active"));
}

function setNavActive(view) {
  clearActive();
  document.querySelector(`.nav-btn[data-view="${view}"]`)?.classList.add("active");
}

async function fetchMarkdown(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`failed to fetch ${path}`);
  let text = await res.text();
  // strip frontmatter
  if (text.startsWith("---\n")) {
    const end = text.indexOf("\n---\n", 4);
    if (end !== -1) text = text.slice(end + 5);
  }
  return text;
}

function renderMarkdown(text) {
  const html = marked.parse(text);
  return `<article>${html}</article>`;
}

async function showTheme(theme) {
  clearActive();
  document.querySelector(`.theme-link[data-theme-id="${theme.id}"]`)?.classList.add("active");
  const md = await fetchMarkdown(theme.file);
  document.getElementById("content").innerHTML = renderMarkdown(md);
}

async function showHome() {
  setNavActive("home");
  const byPillar = {};
  for (const t of manifest.themes) (byPillar[t.pillar] ??= []).push(t);
  const latestBrief = manifest.briefs[0];
  const briefSection = latestBrief
    ? `<p>Latest brief: <a href="#" onclick="showLatestBrief();return false">${latestBrief.week}</a> (${latestBrief.date_range})</p>`
    : `<p class="empty-state">No briefs yet — ask Claude to "run the weekly brief."</p>`;

  let pillarsHTML = "";
  for (const pillar of PILLAR_ORDER) {
    const themes = byPillar[pillar];
    if (!themes) continue;
    const lis = themes.map(t =>
      `<li><a href="#" data-theme-id="${t.id}">${t.title}</a></li>`
    ).join("");
    pillarsHTML += `
      <div class="home-pillar" data-pillar="${pillar}">
        <h3>${pillar}</h3>
        <ul>${lis}</ul>
      </div>`;
  }

  document.getElementById("content").innerHTML = `
    <article>
      <h1>worldview</h1>
      <p>A synthesis system for tracking structural questions across macro, geopolitics, AI/tech, and capital markets. Not a news feed.</p>
      ${briefSection}
      <div class="home-pillars">${pillarsHTML}</div>
    </article>
  `;
  document.querySelectorAll(".home-pillar a").forEach(a => {
    a.onclick = (e) => {
      e.preventDefault();
      const t = manifest.themes.find(x => x.id === a.dataset.themeId);
      showTheme(t);
    };
  });
}

async function showLatestBrief() {
  setNavActive("latest-brief");
  const latest = manifest.briefs[0];
  if (!latest) {
    document.getElementById("content").innerHTML = `
      <article>
        <h1>No briefs yet</h1>
        <p class="empty-state">Ask Claude to "run the weekly brief" to generate the first one.</p>
      </article>`;
    return;
  }
  const md = await fetchMarkdown(latest.file);
  document.getElementById("content").innerHTML = renderMarkdown(md);
}

async function showSources() {
  setNavActive("sources");
  const md = await fetchMarkdown("sources.md");
  document.getElementById("content").innerHTML = renderMarkdown(md);
}

async function showMetrics() {
  setNavActive("metrics");
  const res = await fetch(manifest.metrics_file);
  const data = await res.json();
  let html = `<article><h1>Metrics</h1><p>Structural numbers tracked weekly. Each maps to a theme question.</p>`;
  for (const m of data.metrics) {
    const latest = m.series.length ? m.series[m.series.length - 1] : null;
    const latestVal = latest ? `${latest.value} ${m.unit}` : "—";
    const latestDate = latest ? latest.date : "no data yet";
    html += `
      <div class="metric-card">
        <div class="metric-header">
          <div class="metric-name">${m.name}</div>
          <div class="metric-latest">${latestVal}</div>
        </div>
        <div class="metric-meta">
          ${m.description} · theme: <code>${m.theme}</code> · source: ${m.source} · ${latestDate}
        </div>
        ${m.series.length > 1 ? `<div class="metric-chart-wrapper"><canvas id="chart-${m.id}"></canvas></div>` : `<div class="metric-meta">— series will populate as you run weekly briefs —</div>`}
      </div>`;
  }
  html += `</article>`;
  document.getElementById("content").innerHTML = html;
  for (const m of data.metrics) {
    if (m.series.length < 2) continue;
    const ctx = document.getElementById(`chart-${m.id}`);
    new Chart(ctx, {
      type: "line",
      data: {
        labels: m.series.map(p => p.date),
        datasets: [{
          data: m.series.map(p => p.value),
          borderColor: "#d4a574",
          backgroundColor: "rgba(212, 165, 116, 0.1)",
          tension: 0.2,
          pointRadius: 2,
          fill: true,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { ticks: { color: "#8b949e", font: { size: 10 } }, grid: { color: "#2d333b" } },
          y: { ticks: { color: "#8b949e", font: { size: 10 } }, grid: { color: "#2d333b" } },
        },
      },
    });
  }
}

window.showLatestBrief = showLatestBrief;

document.querySelectorAll(".nav-btn").forEach(btn => {
  btn.onclick = () => {
    const view = btn.dataset.view;
    if (view === "home") showHome();
    else if (view === "latest-brief") showLatestBrief();
    else if (view === "metrics") showMetrics();
    else if (view === "sources") showSources();
  };
});

(async () => {
  await loadManifest();
  await showHome();
})();
