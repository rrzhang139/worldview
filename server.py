#!/usr/bin/env python3
"""Worldview local server.

Serves static files and exposes POST /api/add which appends a highlighted
term + its surrounding context to learning-queue.md. No LLM calls — the
queue is just a confusion/curiosity log; explanations happen later in chat
with Claude, who reads this file for context priming.

Usage:
    python3 server.py [--port 8000]
"""

import argparse
import json
from datetime import datetime
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).parent
LEARNING_QUEUE = ROOT / "learning-queue.md"


def append_to_queue(term: str, context: str) -> None:
    LEARNING_QUEUE.touch(exist_ok=True)
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M")
    entry = (
        f"## {term}\n\n"
        f"*[{timestamp}] via highlight*\n\n"
        f"**Context:** {context.strip()}\n\n"
        f"---\n\n"
    )
    with LEARNING_QUEUE.open("a") as f:
        f.write(entry)


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def log_message(self, fmt: str, *args) -> None:
        print(f"[{self.log_date_time_string()}] {fmt % args}")

    def do_POST(self) -> None:
        path = urlparse(self.path).path
        if path != "/api/add":
            self.send_error(404, "Not found")
            return
        length = int(self.headers.get("Content-Length", "0"))
        payload = json.loads(self.rfile.read(length).decode("utf-8"))
        term = payload.get("term", "").strip()
        context = payload.get("context", "").strip()
        if not term:
            self._respond_json(400, {"error": "missing term"})
            return
        append_to_queue(term, context)
        self._respond_json(200, {"term": term, "logged": True})

    def _respond_json(self, status: int, payload: dict) -> None:
        body = json.dumps(payload).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--port", type=int, default=8000)
    args = parser.parse_args()
    server = ThreadingHTTPServer(("127.0.0.1", args.port), Handler)
    print(f"worldview serving at http://localhost:{args.port}/  (Ctrl+C to stop)")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nstopped")


if __name__ == "__main__":
    main()
