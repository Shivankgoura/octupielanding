import { NextRequest, NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";

type Entry = { name: string; email: string; createdAt: string };

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Writable location: /tmp in serverless, fallback to project .data
async function storeFilePath(): Promise<string> {
  const candidates = [
    process.env.WAITLIST_FILE,
    "/tmp/octupie-waitlist.json",
    path.join(process.cwd(), ".data", "waitlist.json"),
  ].filter(Boolean) as string[];

  for (const p of candidates) {
    try {
      await fs.mkdir(path.dirname(p), { recursive: true });
      await fs.access(path.dirname(p));
      return p;
    } catch {
      // try next
    }
  }
  return candidates[candidates.length - 1];
}

async function readAll(file: string): Promise<Entry[]> {
  try {
    const raw = await fs.readFile(file, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Entry[]) : [];
  } catch {
    return [];
  }
}

async function appendEntry(entry: Entry): Promise<void> {
  const file = await storeFilePath();
  const all = await readAll(file);
  all.push(entry);
  await fs.writeFile(file, JSON.stringify(all, null, 2), "utf8");
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json().catch(() => ({}))) as {
      name?: string;
      email?: string;
    };
    const name = (body.name ?? "").toString().trim().slice(0, 100);
    const email = (body.email ?? "").toString().trim().slice(0, 200);

    if (!name) {
      return NextResponse.json(
        { ok: false, error: "Name is required." },
        { status: 400 },
      );
    }
    if (!emailRe.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email." },
        { status: 400 },
      );
    }

    const entry: Entry = {
      name,
      email,
      createdAt: new Date().toISOString(),
    };

    await appendEntry(entry);

    // Optional forward webhook (Zapier/Make/Airtable/etc). Set WAITLIST_WEBHOOK_URL.
    const webhook = process.env.WAITLIST_WEBHOOK_URL;
    if (webhook) {
      fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(entry),
      }).catch(() => {
        /* non-blocking */
      });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Unexpected server error." },
      { status: 500 },
    );
  }
}

export async function GET() {
  // Simple protected count (never return emails)
  if (process.env.WAITLIST_ADMIN_TOKEN == null) {
    return NextResponse.json({ ok: false, error: "Not enabled." }, { status: 404 });
  }
  const file = await storeFilePath();
  const all = await readAll(file);
  return NextResponse.json({ ok: true, count: all.length });
}
