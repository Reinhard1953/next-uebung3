"use server";
import { neon } from "@neondatabase/serverless";

export async function getData() {
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl) {
    throw new Error("❌ DATABASE_URL is not defined");
  }

  const sql = neon(dbUrl);
  const data = await sql`SELECT * FROM your_table`;
  return data;
}
