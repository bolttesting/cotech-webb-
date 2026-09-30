"use client";

import { useState } from "react";
import { tryCreateBrowserClient } from "@/lib/supabase/client";
import { SUPABASE_SETUP_HINT } from "@/lib/supabase/env";

export function LoginForm({ nextPath, disabled }: { nextPath: string; disabled?: boolean }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (disabled) return;
    setLoading(true);
    setError(null);
    const supabase = tryCreateBrowserClient();
    if (!supabase) {
      setError(SUPABASE_SETUP_HINT);
      setLoading(false);
      return;
    }
    const { error: signError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);
    if (signError) {
      setError(signError.message);
      return;
    }
    window.location.href = nextPath || "/admin";
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {error ? (
        <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>
      ) : null}
      <label className="block">
        <span className="text-sm font-medium">Email</span>
        <input
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={disabled}
          className="mt-1 w-full rounded-xl border border-[#0b2e33]/10 px-4 py-2.5 outline-none focus:border-[#0d666c]/40"
        />
      </label>
      <label className="block">
        <span className="text-sm font-medium">Password</span>
        <input
          type="password"
          required
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={disabled}
          className="mt-1 w-full rounded-xl border border-[#0b2e33]/10 px-4 py-2.5 outline-none focus:border-[#0d666c]/40"
        />
      </label>
      <button
        type="submit"
        disabled={loading || disabled}
        className="w-full rounded-full bg-[#0d666c] py-2.5 text-sm font-semibold text-white hover:bg-[#0b2e33] disabled:opacity-60"
      >
        {loading ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
