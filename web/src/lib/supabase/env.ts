export type SupabaseEnv = {
  url: string;
  anonKey: string;
};

export const SUPABASE_SETUP_HINT =
  "Supabase is not configured. Copy web/env.example to web/.env.local and set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY (anon/public key only, not the service role).";

const PLACEHOLDER_MARKERS = ["YOUR_PROJECT", "your_anon_key"];

export function getSupabaseEnv(): SupabaseEnv | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();
  if (!url || !anonKey) return null;
  if (PLACEHOLDER_MARKERS.some((m) => url.includes(m) || anonKey.includes(m))) {
    return null;
  }
  return { url, anonKey };
}

export function isSupabaseConfigured(): boolean {
  return getSupabaseEnv() !== null;
}

/** True when the API error likely means migrations were not applied yet. */
export function isBlogSchemaMissing(message: string | undefined): boolean {
  if (!message) return false;
  const lower = message.toLowerCase();
  return (
    lower.includes("blog_posts") ||
    lower.includes("schema cache") ||
    lower.includes("relation") ||
    lower.includes("does not exist")
  );
}
