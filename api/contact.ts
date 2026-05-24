import { neon } from "@neondatabase/serverless";
import type { VercelRequest, VercelResponse } from "@vercel/node";

async function ensureTable(sql: ReturnType<typeof neon>) {
  await sql`
    CREATE TABLE IF NOT EXISTS contacts (
      id         SERIAL PRIMARY KEY,
      name       TEXT NOT NULL,
      message    TEXT NOT NULL,
      created_at TIMESTAMPTZ DEFAULT now()
    )
  `;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const connectionString = process.env.DATABASE_URL ?? process.env.FREENET_DATABASE_URL;
  if (!connectionString) {
    return res.status(500).json({ error: "Database connection string is not configured" });
  }
  const sql = neon(connectionString);
  await ensureTable(sql);

  if (req.method === "POST") {
    const { name, message } = req.body ?? {};

    if (!name?.trim() || !message?.trim()) {
      return res.status(400).json({ error: "نام و پیام الزامی هستند" });
    }

    await sql`INSERT INTO contacts (name, message) VALUES (${name.trim()}, ${message.trim()})`;
    return res.status(201).json({ ok: true });
  }

  if (req.method === "GET") {
    const secret = req.query.adminSecret;
    if (!secret || secret !== process.env.ADMIN_SECRET) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const rows = await sql`SELECT id, name, message, created_at FROM contacts ORDER BY created_at DESC`;
    return res.status(200).json(rows);
  }

  return res.status(405).json({ error: "Method not allowed" });
}
