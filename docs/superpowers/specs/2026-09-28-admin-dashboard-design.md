# COTech Admin Dashboard & CMS — Design Spec

**Date:** 2026-09-28  
**Status:** Phase 1 scaffold implemented in `/web` (Next.js + Supabase migration SQL)  
**Decisions locked in (from discovery):**

| Topic | Choice |
|--------|--------|
| Backend | **Supabase** (Auth, Postgres, Storage) |
| Admin UI | **Next.js** app |
| Public site | **Gradual migration** to Next.js |
| Phase 1 scope | **Blog CRUD only** (projects → Phase 2) |

---

## 1. Problem & goals

Marketing content (blogs today, projects later) is **hard-coded in static HTML**. Editors cannot publish without developer involvement. We need:

- Secure **login** for COTech staff only  
- **Admin dashboard** to create, edit, publish/unpublish blog posts  
- **Public blog** served from the database with SEO-friendly URLs  
- A path to **migrate the rest of the site** to Next.js without a big-bang rewrite  

**Non-goals (Phase 1):** projects CRUD, FAQ, services registry, multi-tenant CMS, public user accounts, comments.

---

## 2. Recommended architecture

### 2.1 Single Next.js app (recommended)

One Next.js 15 project (App Router) in **`/web`**, deployed as the Vercel project root (or `rootDirectory: web` in Vercel).

| Route group | Examples | Auth |
|-------------|----------|------|
| Public (App Router) | `/blog`, `/blog/[slug]` | None |
| Admin | `/admin`, `/admin/posts`, `/admin/posts/new`, `/admin/posts/[id]` | Supabase session required |
| Auth | `/login` | Public; redirects to `/admin` if already signed in |
| Legacy | All other paths | Served from `web/public/*.html` until migrated |

**Why one app (vs separate admin subdomain):** shared components (header/footer), one deploy, `@supabase/ssr` cookies work on same origin, simpler gradual migration.

**Alternative considered:** Admin-only Next app + static site forever → rejected because you chose full Next migration.

### 2.2 Supabase

**Auth**

- Email + password (and optional magic link later)  
- Only users with `profiles.role = 'admin'` (or membership in `admin_users`) can access `/admin/*`  
- Bootstrap: first admin created manually in Supabase Dashboard, then invite flow in Phase 2  

**Table: `blog_posts`**

| Column | Type | Notes |
|--------|------|--------|
| `id` | uuid | PK, default `gen_random_uuid()` |
| `slug` | text | unique, URL-safe |
| `title` | text | |
| `excerpt` | text | card / SEO description |
| `body` | text | Markdown or HTML (see editor) |
| `cover_image_path` | text | Supabase Storage path |
| `category` | text | optional; matches current blog tabs if desired |
| `status` | enum | `draft` \| `published` |
| `published_at` | timestamptz | null until published |
| `author_id` | uuid | FK → `auth.users` |
| `created_at` / `updated_at` | timestamptz | |

**RLS**

- `SELECT`: anonymous + authenticated where `status = 'published'`  
- `INSERT/UPDATE/DELETE`: authenticated users where `profiles.role = 'admin'` (or via security definer helper)  

**Storage bucket: `blog-media`**

- Public read for published assets (or signed URLs for drafts only)  
- Upload/delete: admins only  

### 2.3 Auth flow (Next + Supabase)

- `@supabase/ssr` in middleware: refresh session, protect `/admin`  
- `/login`: server action or client sign-in → redirect `/admin`  
- Replace stub `login.html` redirect with Next route `/login` (legacy `login.html` can meta-redirect to `/login` during transition)  

### 2.4 Public blog (Phase 1)

- `/blog` — list published posts (pagination later)  
- `/blog/[slug]` — detail; reuse existing COTech typography/CSS (import `cotech.css` / layout components ported from HTML)  
- Until list/detail pages are fully ported, optional **feature flag**: keep `blog.html` but inject “latest posts” from Supabase via embed script (fallback only; primary path is Next routes)  

### 2.5 Gradual migration strategy

1. **Phase 1:** Add `web/`, Supabase, `/login`, `/admin/**`, `/blog/**`.  
2. Configure Vercel: framework = Next, `web` as root. Legacy HTML copied/symlinked under `web/public/` (e.g. `index.html`, `services.html`).  
3. Next **middleware**: if path matches migrated App Router route → Next; else try static file in `public`.  
4. **Phase 2+:** Move routes one-by-one into App Router; delete duplicate HTML when parity reached.  

---

## 3. Admin UX (Phase 1)

**Layout:** Sidebar (Posts, later Projects/Settings) + top bar (user menu, sign out).

**Screens**

1. **Dashboard** — counts: drafts, published; link to create post  
2. **Posts list** — table/cards: title, status, updated, actions (edit, delete with confirm)  
3. **Post editor** — title, slug (auto from title, editable), excerpt, category, cover upload, body editor, Save draft / Publish  

**Editor:** Markdown with preview (e.g. simple textarea + MD render) for Phase 1; upgrade to Tiptap in Phase 2 if needed.

**Design:** Match COTech admin feel — Inter Tight, teal `#0D666C`, light surfaces; distinct from marketing pages but on-brand.

---

## 4. Security

- RLS on all tables; no service role key in browser  
- Admin routes gated in middleware + server-side re-check on mutations  
- Storage policies aligned with admin role  
- `robots: noindex` on `/admin` and `/login`  

---

## 5. Phasing

| Phase | Deliverable |
|-------|-------------|
| **1a** | Supabase project, schema, RLS, bucket; env vars documented |
| **1b** | Next scaffold, login, middleware, admin shell |
| **1c** | Blog CRUD in admin |
| **1d** | Public `/blog` + `/blog/[slug]` |
| **1e** | Vercel deploy + redirect `login.html` → `/login` |
| **2** | Projects CRUD, media library polish, invite admins |
| **3** | Migrate home, services, remaining HTML routes |

---

## 6. Open items (need your input later)

- **Domain:** same domain (`cotechme.com/blog`) vs `admin.` subdomain for admin only  
- **Blog body format:** Markdown vs rich HTML  
- **Categories:** mirror current blog tabs (Design, Marketing, …) or free text  
- **“Other” admin features** you hinted at — capture in Phase 2 backlog  

---

## 7. Approval

If this matches what you want, reply **approved** (or list changes). Next step: implementation plan (`writing-plans` skill) and Phase 1a execution.
