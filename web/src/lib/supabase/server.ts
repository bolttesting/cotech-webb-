import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { getSupabaseEnv, type SupabaseEnv } from "@/lib/supabase/env";

export async function createClientWithEnv(env: SupabaseEnv) {
  const cookieStore = await cookies();

  return createServerClient(env.url, env.anonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options),
          );
        } catch {
          /* set from Server Component */
        }
      },
    },
  });
}

export async function tryCreateClient() {
  const env = getSupabaseEnv();
  if (!env) return null;
  return createClientWithEnv(env);
}

/** Throws if Supabase env vars are missing (use on admin mutations). */
export async function createClient() {
  const client = await tryCreateClient();
  if (!client) {
    throw new Error("SUPABASE_NOT_CONFIGURED");
  }
  return client;
}

export async function getAdminUser() {
  const supabase = await tryCreateClient();
  if (!supabase) return null;

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .maybeSingle();

  if (profile?.role !== "admin") return null;
  return user;
}
