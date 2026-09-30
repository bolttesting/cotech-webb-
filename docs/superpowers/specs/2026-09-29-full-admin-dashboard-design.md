# COTech Full Admin Dashboard — Design Spec

**Date:** 2026-09-29  
**Status:** Draft — awaiting approval  
**Builds on:** [2026-09-28-admin-dashboard-design.md](./2026-09-28-admin-dashboard-design.md) (Phase 1 blog scaffold)

---

## 1. Goal

One **admin dashboard** where COTech staff can manage **all customer-facing content and operational data** without editing HTML, JSON registries, or Supabase by hand. The public site keeps the current marketing design; admin uses a dedicated, on-brand **app shell** (sidebar, tables, editors, media picker).

**Success:** A non-developer can publish a blog post, update a project, tweak a service summary, upload an image, and review contact enquiries from `/admin` only.

---

## 2. Current state (honest)

| Area | Today |
|------|--------|
| Auth | `/login`, middleware, `profiles.role = admin` |
| Admin UI | Top bar only (`AdminShell`), no sidebar |
| Blog | CRUD + public `/blog`, `/blog/[slug]` |
| Everything else | Static HTML, React page components, `COTECH_SERVICE_LINES` in JS |
| Database | `profiles`, `blog_posts`, `blog-media` bucket |

Phase 1 spec items **not yet done:** sidebar layout, rich dashboard home, Tiptap (optional), invite admins.

---

## 3. “Everything” — content domains

Grouped by how the public site consumes them:

| Module | Public surface | Source today | CMS target |
|--------|----------------|--------------|------------|
| **Blog** | `/blog`, `/blog/[slug]` | DB (partial) + legacy demo HTML | DB only; admin drives featured swiper + grid |
| **Projects** | `/projects`, `/project-*` | Static HTML / React | `projects` table + storage |
| **Services** | `/services`, `/service-*` | `cotech-services.js` + React TSX | `service_lines` table (or hybrid: DB copy + structured fields) |
| **FAQ** | `/faq` | React `FaqPageContent` | `faq_items` table |
| **Pages** | About, legal, etc. | React + legacy inject | Phase 3: block-based or MD per page (optional) |
| **Media** | `/images/*` | Files in repo + Storage | Central library; references by ID/path |
| **Leads** | `/contact` forms | None persisted | `contact_submissions` + email notify |
| **Team** | Redirected to About | N/A | Optional later |
| **Site** | SEO, redirects | `next.config`, metadata | `site_settings` key-value (admin-only) |
| **Users** | `/admin` access | Manual Supabase | Invite list, roles `admin` \| `editor` |

**Editor role (v1):** can create/edit drafts; **admin** can publish, delete, manage users and settings.

---

## 4. Approaches (pick one)

### A. Unified Supabase CMS (recommended)

Single Postgres schema, RLS, Storage buckets per domain. Next admin routes per module. Public pages fetch from Supabase (SSR/ISR) with fallback to static during migration.

**Pros:** One auth, one deploy, matches Phase 1.  
**Cons:** More migrations up front; service pages are structurally heavy.

### B. Headless CMS (Sanity / Contentful)

External CMS; Next fetches via API.

**Pros:** Polished editor UX out of the box.  
**Cons:** Extra cost, another system, duplicates Supabase investment.

### C. Git-based CMS (Tina / Decap)

Editors commit MDX in repo.

**Pros:** Version control native.  
**Cons:** Poor fit for non-technical staff; conflicts with “no developer for every publish.”

**Recommendation:** **A** — extend Supabase + `/admin` already started.

---

## 5. Admin UX architecture

### 5.1 Shell

- **Layout:** `(cms)/admin/layout.tsx` → `AdminAppShell` with:
  - Left **sidebar** (collapsible on mobile): Dashboard, Content (Blog, Projects, Services, FAQ), Media, Leads, Site, Users (admin only)
  - Top bar: global search (later), “View site”, user menu, sign out
- **Design:** Inter Tight, teal `#0D666C`, neutral gray surfaces — distinct from marketing CSS but on-brand
- **robots:** noindex on all `/admin/*`

### 5.2 Dashboard home (`/admin`)

Widgets (real data, not placeholders):

- Counts: published/draft posts, projects, open leads (7d)
- **Recent activity:** last 10 edits (audit log table)
- Quick actions: New post, New project, View leads
- **System:** Supabase connected / migration OK / storage usage (optional)

### 5.3 Shared patterns

- **List views:** sortable table, status filter, search, pagination (20/page)
- **Editor:** title, slug (auto), status, SEO fields (meta title/description), cover via **media picker**
- **Body:** Markdown + preview (Phase 2b); optional Tiptap for long-form
- **Media picker:** modal browsing `media_assets` + upload
- **Delete:** confirm dialog; soft-delete optional for blog/projects

---

## 6. Data model (new tables — summary)

All tables: `created_at`, `updated_at`, RLS mirroring `blog_posts` pattern.

| Table | Purpose |
|-------|---------|
| `media_assets` | filename, storage_path, mime, alt, width/height, uploaded_by |
| `projects` | slug, title, excerpt, body, cover, client, industry, status, sort_order |
| `service_lines` | slug, title, hero, sections JSON (or normalized child tables), media refs, `registry_key` for migration |
| `faq_items` | question, answer, category, sort_order, status |
| `contact_submissions` | name, email, phone, message, source_page, read_at, created_at |
| `site_settings` | key (unique), value jsonb |
| `audit_log` | actor_id, action, entity_type, entity_id, meta jsonb |

Storage buckets: `blog-media` (existing), `project-media`, `site-media` (or one `cms-media` with prefixes).

---

## 7. Public site integration

- **Blog:** Replace legacy injected grid with Supabase list; map categories to filter tabs dynamically.
- **Projects / FAQ:** Server components read DB; ISR `revalidate` on publish from server actions.
- **Services:** Phase 2 — start with **editable fields** (title, summary, hero media) while keeping React layout; full “every bullet” CMS is Phase 3.
- **Contact:** Server action writes `contact_submissions`; optional Resend/Edge Function email to `info@cotechme.com`.

---

## 8. Phased delivery (recommended order)

| Phase | Deliverable | Est. focus |
|-------|-------------|------------|
| **2.0** | Admin shell upgrade (sidebar, dashboard widgets, audit log) | UX foundation |
| **2.1** | Media library + wire blog cover/upload to library | Shared asset layer |
| **2.2** | Blog polish (public list from DB, categories, featured posts flag) | Complete blog loop |
| **2.3** | Projects CRUD + public `/projects` from DB | High marketing value |
| **2.4** | FAQ CRUD + public `/faq` from DB | Easy win |
| **2.5** | Contact submissions inbox in admin | Operations |
| **2.6** | Service lines — editable summaries + media (not full page builder) | Bridges JS registry |
| **2.7** | Users & invites (admin invites editor) | Team scale |
| **2.8** | Site settings (SEO defaults, maintenance banner) | Governance |
| **3.x** | Page blocks / MD pages for About & legal; full service section CMS | Long tail |

Each phase: migration SQL, RLS, server actions, admin routes, public read path, `revalidatePath`.

---

## 9. Security

- Keep **service role key server-only**
- Middleware + server action double-check `is_admin()` / role for publish & user management
- Editors: INSERT/UPDATE drafts only; no DELETE on published without admin
- Leads: admin read-only; no public SELECT
- File uploads: type/size limits, virus scan optional later

---

## 10. Non-goals (this program)

- Multi-tenant / client portals
- Public comment systems
- Full WYSIWYG page builder (Webflow-style) in v1
- Replacing WhatsApp / CRM integrations inside admin (links only)

---

## 11. Approval

Reply with:

1. **Approved** — proceed to implementation plan (writing-plans) starting Phase 2.0  
2. **Changes** — e.g. drop FAQ, prioritize leads first, etc.  
3. **Approach B/C** — if you prefer external CMS

After approval, first implementation slice: **sidebar shell + dashboard home + media library schema** (no big-bang).
