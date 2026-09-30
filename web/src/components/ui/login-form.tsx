"use client";

import { cn } from "@/lib/utils";
import { tryCreateBrowserClient } from "@/lib/supabase/client";
import { SUPABASE_SETUP_HINT } from "@/lib/supabase/env";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";

export type LoginFormProps = {
  nextPath?: string;
  disabled?: boolean;
  className?: string;
  /** Server-rendered notices (Supabase setup, auth errors). */
  alerts?: ReactNode;
};

export function LoginForm({
  nextPath = "/admin",
  disabled,
  className,
  alerts,
}: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);

  async function onForgotPassword() {
    if (disabled) return;
    setError(null);
    setInfo(null);
    if (!email.trim()) {
      setError("Enter your email above, then choose Forgot password.");
      return;
    }
    setResetLoading(true);
    const supabase = tryCreateBrowserClient();
    if (!supabase) {
      setError(SUPABASE_SETUP_HINT);
      setResetLoading(false);
      return;
    }
    const redirectTo =
      typeof window !== "undefined" ? `${window.location.origin}/login` : undefined;
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email.trim(), {
      redirectTo,
    });
    setResetLoading(false);
    if (resetError) {
      setError(resetError.message);
      return;
    }
    setInfo("If an account exists for that email, we sent a reset link.");
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (disabled) return;
    setLoading(true);
    setError(null);
    setInfo(null);
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
    if (remember && typeof window !== "undefined") {
      window.localStorage.setItem("cotech-admin-email", email);
    } else if (typeof window !== "undefined") {
      window.localStorage.removeItem("cotech-admin-email");
    }
    window.location.href = nextPath || "/admin";
  }

  return (
    <div className={cn("flex min-h-screen w-full bg-white", className)}>
      <div className="relative hidden min-h-screen w-1/2 md:block">
        <Image
          src="/images/cotech-svc-ai.jpg"
          alt="COTech AI agents service"
          fill
          priority
          className="object-cover"
          sizes="50vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0b2e33]/80 via-[#0b2e33]/25 to-transparent" />
        <div className="absolute bottom-10 left-10 right-10 text-white">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/80">COTech</p>
          <p className="mt-2 max-w-md text-lg font-medium leading-snug">
            Admin access for blog and site content — UAE business intelligence studio.
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center px-4 py-12 md:w-1/2">
        <form
          onSubmit={onSubmit}
          className="flex w-full max-w-sm flex-col items-stretch md:max-w-md"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#0d666c]">COTech</p>
          <h1 className="mt-2 text-3xl font-semibold text-[#0b2e33] md:text-4xl">Sign in</h1>
          <p className="mt-2 text-sm text-[#0b2e33]/60">
            Welcome back. Sign in with your admin email and password.
          </p>

          {alerts ? <div className="mt-4 space-y-3">{alerts}</div> : null}
          {error ? (
            <p className="mt-4 rounded-xl bg-red-50 px-3 py-2 text-sm text-red-800">{error}</p>
          ) : null}
          {info ? (
            <p className="mt-4 rounded-xl bg-[#0d666c]/10 px-3 py-2 text-sm text-[#0b2e33]">{info}</p>
          ) : null}

          <div className="mt-8 flex h-12 items-center gap-3 overflow-hidden rounded-full border border-[#0b2e33]/15 pl-5 pr-4">
            <Mail className="size-4 shrink-0 text-[#0b2e33]/45" aria-hidden />
            <input
              type="email"
              placeholder="Email"
              required
              autoComplete="email"
              disabled={disabled || loading}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-full w-full bg-transparent text-sm text-[#0b2e33] outline-none placeholder:text-[#0b2e33]/40"
            />
          </div>

          <div className="mt-4 flex h-12 items-center gap-3 rounded-full border border-[#0b2e33]/15 pl-5 pr-2">
            <Lock className="size-4 shrink-0 text-[#0b2e33]/45" aria-hidden />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              autoComplete="current-password"
              disabled={disabled || loading}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-full min-w-0 flex-1 bg-transparent text-sm text-[#0b2e33] outline-none placeholder:text-[#0b2e33]/40"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              disabled={disabled || loading}
              className="flex size-9 shrink-0 items-center justify-center rounded-full text-[#0b2e33]/45 hover:bg-[#0b2e33]/5 hover:text-[#0b2e33] disabled:opacity-50"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            </button>
          </div>

          <div className="mt-6 flex items-center justify-between text-sm text-[#0b2e33]/65">
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="size-4 rounded border-[#0b2e33]/20 accent-[#0d666c]"
              />
              Remember me
            </label>
            <button
              type="button"
              onClick={onForgotPassword}
              disabled={disabled || resetLoading}
              className="text-[#0d666c] underline-offset-2 hover:underline disabled:opacity-50"
            >
              {resetLoading ? "Sending…" : "Forgot password"}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading || disabled}
            className="mt-8 h-12 rounded-full bg-[#0d666c] text-sm font-semibold text-white transition-opacity hover:bg-[#0b2e33] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>

          <div className="mt-6 flex justify-center">
            <Link
              href="/"
              className="rounded-full border border-[#0b2e33]/15 px-5 py-2 text-sm font-medium text-[#0b2e33] hover:border-[#0d666c]/40 hover:text-[#0d666c]"
            >
              Home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
