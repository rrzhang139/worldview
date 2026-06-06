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

let glossaryRegex = null;

function buildGlossaryRegex() {
  const keys = Object.keys(glossary.entries || {});
  if (!keys.length) return null;
  const sorted = keys.sort((a, b) => b.length - a.length);
  const escaped = sorted.map(k =>
    k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+")
  );
  return new RegExp(`\\b(${escaped.join("|")})\\b`, "gi");
}

function annotateGlossaryTerms(rootEl) {
  if (!glossaryRegex) return;
  const walker = document.createTreeWalker(rootEl, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      if (parent.closest("code, pre, .gloss-term, .def-tip, .toast, h1, h2, h3")) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  const textNodes = [];
  let node;
  while ((node = walker.nextNode())) textNodes.push(node);

  for (const textNode of textNodes) {
    const text = textNode.nodeValue;
    glossaryRegex.lastIndex = 0;
    if (!glossaryRegex.test(text)) continue;
    glossaryRegex.lastIndex = 0;
    const frag = document.createDocumentFragment();
    let lastIdx = 0;
    let m;
    while ((m = glossaryRegex.exec(text))) {
      if (m.index > lastIdx) {
        frag.appendChild(document.createTextNode(text.slice(lastIdx, m.index)));
      }
      const span = document.createElement("span");
      span.className = "gloss-term";
      span.dataset.term = m[0].toLowerCase().replace(/\s+/g, " ");
      span.textContent = m[0];
      frag.appendChild(span);
      lastIdx = glossaryRegex.lastIndex;
    }
    if (lastIdx < text.length) {
      frag.appendChild(document.createTextNode(text.slice(lastIdx)));
    }
    textNode.parentNode.replaceChild(frag, textNode);
  }
}

function setContent(html) {
  const el = document.getElementById("content");
  el.innerHTML = html;
  annotateGlossaryTerms(el);
  // Navigating closes the mobile drawer and resets scroll to the top.
  document.body.classList.remove("nav-open");
  el.scrollTop = 0;
  window.scrollTo(0, 0);
}

function chartConfig(m, idPrefix) {
  return {
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
  };
}

function buildMetricCard(m, idPrefix) {
  const latest = m.series.length ? m.series[m.series.length - 1] : null;
  const latestVal = latest ? `${latest.value} ${m.unit}` : "—";
  const latestDate = latest ? latest.date : "no data yet";
  const chartHtml = m.series.length > 1
    ? `<div class="metric-chart-wrapper"><canvas id="${idPrefix}${m.id}"></canvas></div>`
    : `<div class="metric-meta">— no series data yet —</div>`;
  return `
    <div class="metric-card">
      <div class="metric-header">
        <div class="metric-name">${m.name}</div>
        <div class="metric-latest">${latestVal}</div>
      </div>
      <div class="metric-meta">${m.description} · <em>${latestDate}</em></div>
      ${chartHtml}
    </div>`;
}

async function showTheme(theme) {
  clearActive();
  document.querySelector(`.theme-link[data-theme-id="${theme.id}"]`)?.classList.add("active");
  const md = await fetchMarkdown(theme.file);
  const themeMetrics = metricsData.metrics.filter(m => m.theme === theme.id);
  const metricsHtml = themeMetrics.length
    ? `<section class="theme-metrics"><h2>Metrics</h2>${themeMetrics.map(m => buildMetricCard(m, "tm-")).join("")}</section>`
    : "";
  setContent(renderMarkdown(md) + metricsHtml);
  for (const m of themeMetrics) {
    if (m.series.length < 2) continue;
    const ctx = document.getElementById(`tm-${m.id}`);
    if (ctx) new Chart(ctx, chartConfig(m));
  }
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

  setContent(`
    <article>
      <h1>worldview</h1>
      <p>A synthesis system for tracking structural questions across macro, geopolitics, AI/tech, and capital markets. Not a news feed.</p>
      ${briefSection}
      <div class="home-pillars">${pillarsHTML}</div>
    </article>
  `);
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
    setContent(`
      <article>
        <h1>No briefs yet</h1>
        <p class="empty-state">Ask Claude to "run the weekly brief" to generate the first one.</p>
      </article>`);
    return;
  }
  const md = await fetchMarkdown(latest.file);
  setContent(renderMarkdown(md));
}

async function showSources() {
  setNavActive("sources");
  const md = await fetchMarkdown("sources.md");
  setContent(renderMarkdown(md));
}

async function showBriefs() {
  setNavActive("briefs");
  if (!manifest.briefs.length) {
    setContent(`<article><h1>Briefs</h1><p class="empty-state">No briefs yet. Ask Claude to "run the weekly brief."</p></article>`);
    return;
  }
  const items = manifest.briefs.map(b =>
    `<li class="brief-item">
      <a href="#" class="brief-link" data-file="${b.file}">
        <span class="brief-week">${b.week}</span>
        <span class="brief-date">${b.date_range}</span>
      </a>
    </li>`
  ).join("");
  setContent(`
    <article>
      <h1>Briefs</h1>
      <p>${manifest.briefs.length} brief${manifest.briefs.length > 1 ? "s" : ""}, newest first.</p>
      <ul class="briefs-list">${items}</ul>
    </article>`);
  document.querySelectorAll(".brief-link").forEach(a => {
    a.onclick = async (e) => {
      e.preventDefault();
      const md = await fetchMarkdown(a.dataset.file);
      setContent(renderMarkdown(md));
    };
  });
}

async function showMetrics() {
  setNavActive("metrics");
  const data = metricsData;
  let html = `<article><h1>Metrics</h1><p>Structural numbers tracked across all themes.</p>`;
  for (const m of data.metrics) {
    html += buildMetricCard(m, "mc-");
  }
  html += `</article>`;
  setContent(html);
  for (const m of data.metrics) {
    if (m.series.length < 2) continue;
    const ctx = document.getElementById(`mc-${m.id}`);
    if (ctx) new Chart(ctx, chartConfig(m));
  }
}

window.showLatestBrief = showLatestBrief;

document.querySelectorAll(".nav-btn").forEach(btn => {
  btn.onclick = () => {
    const view = btn.dataset.view;
    if (view === "home") showHome();
    else if (view === "latest-brief") showLatestBrief();
    else if (view === "briefs") showBriefs();
    else if (view === "metrics") showMetrics();
    else if (view === "sources") showSources();
  };
});

// ---------------- Mobile nav drawer toggle ----------------

const menuToggle = document.getElementById("menu-toggle");
const scrim = document.getElementById("scrim");

function setNavOpen(open) {
  document.body.classList.toggle("nav-open", open);
  menuToggle?.setAttribute("aria-expanded", String(open));
}

menuToggle?.addEventListener("click", () => {
  setNavOpen(!document.body.classList.contains("nav-open"));
});
scrim?.addEventListener("click", () => setNavOpen(false));

// ---------------- Glossary lookup + Add to learning queue on highlight ----------------

let glossary = { entries: {} };

async function loadGlossary() {
  try {
    const res = await fetch("glossary.json");
    glossary = await res.json();
    glossaryRegex = buildGlossaryRegex();
  } catch (e) {
    console.warn("glossary load failed", e);
  }
}

let metricsData = { metrics: [] };

async function loadMetricsData() {
  try {
    const res = await fetch("metrics/data.json");
    metricsData = await res.json();
  } catch (e) {
    console.warn("metrics load failed", e);
  }
}

function lookupGlossary(text) {
  const key = text.toLowerCase().trim().replace(/\s+/g, " ");
  return glossary.entries[key] || null;
}

const addBtn = document.createElement("button");
addBtn.id = "add-btn";
addBtn.textContent = "+ Add";
addBtn.style.display = "none";
document.body.appendChild(addBtn);

let activeDefTip = null;
let lastSelectionRect = null;
let lastSelectionText = "";
let lastSelectionContext = "";

function getSelectionContext(sel) {
  const node = sel.anchorNode;
  if (!node) return "";
  let el = node.nodeType === 1 ? node : node.parentElement;
  while (el && !["P", "LI", "BLOCKQUOTE", "ARTICLE"].includes(el.tagName)) {
    el = el.parentElement;
  }
  return (el ? el.innerText : sel.toString()).trim().slice(0, 1200);
}

function hideAddBtn() {
  addBtn.style.display = "none";
}

const ADD_BTN_ENABLED =
  location.hostname === "localhost" || location.hostname === "127.0.0.1";

function showAddBtn(rect) {
  if (!ADD_BTN_ENABLED) return;
  addBtn.style.top = `${window.scrollY + rect.top - 36}px`;
  addBtn.style.left = `${window.scrollX + rect.left + rect.width / 2 - 28}px`;
  addBtn.style.display = "block";
}

function closeDefTip() {
  if (activeDefTip) {
    activeDefTip.remove();
    activeDefTip = null;
  }
}

function showDefTip(rect, term, entry) {
  closeDefTip();
  const tip = document.createElement("div");
  tip.className = "def-tip";
  const seeAlso = (entry.see_also && entry.see_also.length)
    ? `<div class="def-tip-seealso">see also: ${entry.see_also.map(s => `<code>${s}</code>`).join(" · ")}</div>`
    : "";
  const themeTag = entry.theme ? `<span class="def-tip-theme">${entry.theme}</span>` : "";
  tip.innerHTML = `
    <div class="def-tip-header">
      <span class="def-tip-term">${term}</span>
      ${themeTag}
      <button class="def-tip-close" aria-label="Close">×</button>
    </div>
    <div class="def-tip-body">${entry.definition}</div>
    ${seeAlso}
  `;
  document.body.appendChild(tip);
  positionDefTip(tip, rect);
  tip.querySelector(".def-tip-close").onclick = closeDefTip;
  activeDefTip = tip;
}

function positionDefTip(tip, rect) {
  const tipW = tip.offsetWidth || 360;
  const margin = 10;
  let left = window.scrollX + rect.left + rect.width / 2 - tipW / 2;
  left = Math.max(margin, Math.min(left, window.scrollX + window.innerWidth - tipW - margin));
  const aboveTop = window.scrollY + rect.top - tip.offsetHeight - 12;
  const belowTop = window.scrollY + rect.bottom + 12;
  const top = aboveTop > window.scrollY + margin ? aboveTop : belowTop;
  tip.style.left = `${left}px`;
  tip.style.top = `${top}px`;
}

document.addEventListener("click", (e) => {
  const span = e.target.closest(".gloss-term");
  if (!span) return;
  const key = span.dataset.term;
  const entry = glossary.entries[key];
  if (!entry) return;
  e.preventDefault();
  e.stopPropagation();
  hideAddBtn();
  showDefTip(span.getBoundingClientRect(), span.textContent, entry);
});

document.addEventListener("mouseup", (e) => {
  if (e.target === addBtn || e.target.closest(".def-tip")) return;
  if (e.target.closest(".gloss-term")) return;
  setTimeout(() => {
    const sel = window.getSelection();
    const text = sel.toString().trim();
    if (!text || text.length < 2 || text.length > 120) {
      hideAddBtn();
      return;
    }
    const range = sel.getRangeAt(0);
    lastSelectionRect = range.getBoundingClientRect();
    lastSelectionText = text;
    lastSelectionContext = getSelectionContext(sel);

    const entry = lookupGlossary(text);
    if (entry) {
      hideAddBtn();
      showDefTip(lastSelectionRect, text, entry);
    } else {
      closeDefTip();
      showAddBtn(lastSelectionRect);
    }
  }, 0);
});

document.addEventListener("mousedown", (e) => {
  if (e.target === addBtn) return;
  if (e.target.closest(".def-tip")) return;
  hideAddBtn();
  closeDefTip();
});

addBtn.addEventListener("click", async () => {
  const term = lastSelectionText;
  const context = lastSelectionContext;
  const rect = lastSelectionRect;
  hideAddBtn();
  try {
    const res = await fetch("/api/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ term, context }),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.error || `HTTP ${res.status}`);
    }
    showToast(rect, `added: ${term}`);
  } catch (err) {
    showToast(rect, `error: ${err.message}`, true);
  }
});

function showToast(rect, message, isError = false) {
  const toast = document.createElement("div");
  toast.className = "toast" + (isError ? " toast-error" : "");
  toast.textContent = message;
  document.body.appendChild(toast);
  const top = window.scrollY + rect.top - 40;
  const left = window.scrollX + rect.left + rect.width / 2;
  toast.style.top = `${top}px`;
  toast.style.left = `${left}px`;
  requestAnimationFrame(() => toast.classList.add("toast-show"));
  setTimeout(() => {
    toast.classList.remove("toast-show");
    setTimeout(() => toast.remove(), 300);
  }, 1400);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    hideAddBtn();
    closeDefTip();
    setNavOpen(false);
  }
});

(async () => {
  await Promise.all([loadManifest(), loadGlossary(), loadMetricsData()]);
  await showHome();
})();
