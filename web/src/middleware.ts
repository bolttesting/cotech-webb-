import { type NextRequest, NextResponse } from "next/server";
import { getSupabaseEnv, isBlogSchemaMissing } from "@/lib/supabase/env";
import { createMiddlewareClient, updateSession } from "@/lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const env = getSupabaseEnv();

  if (pathname.startsWith("/admin")) {
    if (!env) {
      const url = request.nextUrl.clone();
      url.pathname = "/login";
      url.searchParams.set("error", "config");
      return NextResponse.redirect(url);
    }

    const response = await updateSession(request, env);
    const supabase = createMiddlewareClient(request, response, env);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      const url = request.nextUrl.clone();
      url.pathname = "/login";
      url.searchParams.set("next", pathname);
      return NextResponse.redirect(url);
    }

    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .maybeSingle();

    if (profileError || profile?.role !== "admin") {
      const url = request.nextUrl.clone();
      url.pathname = "/login";
      if (profileError && isBlogSchemaMissing(profileError.message)) {
        url.searchParams.set("error", "migration");
      } else {
        url.searchParams.set("error", "not_admin");
      }
      return NextResponse.redirect(url);
    }

    return response;
  }

  if (!env) {
    return NextResponse.next();
  }

  return updateSession(request, env);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
