# COTech Web (Next.js)

Blog CMS, admin dashboard, and the marketing site served through a Next.js React shell (legacy HTML body + the same static assets).

## Setup

1. Create a [Supabase](https://supabase.com) project.
2. Run the SQL migration: `../supabase/migrations/20260328180000_blog_cms.sql` (SQL Editor or `supabase db push`).
3. Copy `env.example` → `.env.local` and set:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Create an auth user (Authentication → Users), then in SQL:

```sql
insert into public.profiles (id, role, full_name)
values ('YOUR_USER_UUID', 'admin', 'Your Name');
```

5. From the repo root, install and run the app (see [Marketing site](#marketing-site-react-shell) for URLs):

```bash
cd web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the marketing home, [http://localhost:3000/login](http://localhost:3000/login) for admin, and [http://localhost:3000/blog](http://localhost:3000/blog) for posts.

Supabase credentials live in **`web/.env.local`** (copy from `env.example`); the CMS and auth routes need `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

## Marketing site (React shell)

Run locally:

```bash
cd web && npm run dev
```

Routes under `src/app/(marketing)/` serve the **home page** (`/`) and **every mapped legacy page** through Next.js. Each route injects the same `<body>` markup as the root `.html` files and loads the original stack so layout and motion match the static site:

- `/assets/main.css` and `/assets/cotech.css`
- `/vendor/*`, `/assets/main.js`, and related COTech scripts (GSAP, Lenis, etc.)

**Mapped marketing pages** (clean URLs → repo-root HTML):

| URL | Legacy file |
|-----|-------------|
| `/` | `index.html` |
| `/about` | `about.html` |
| `/services` | `services.html` |
| `/contact` | `contact.html` |
| `/pricing` | `pricing.html` |
| `/process` | `process.html` |
| `/features` | `features.html` |
| `/integration` | `integration.html` |
| `/security` | `security.html` |
| `/faq` | `faq.html` |
| `/projects` | `projects.html` |
| `/privacy-policy` | `privacy-policy.html` |
| `/terms-conditions` | `terms-conditions.html` |

**Service detail pages** are included on the same shell (URLs match the static filenames without `.html`):

- `/service-lead-generation`
- `/service-crm-automation`
- `/service-ai-agents`
- `/service-business-automation`
- `/service-web-platforms`
- `/service-digital-business-systems`
- `/service-sales-calling`
- `/service-corporate-websites`

New routes are added in `src/app/(marketing)/[page]/page.tsx` (`LEGACY_PAGES`). Static assets are symlinked from `public/` (`assets`, `images`, `vendor`) to the repo root. Pages can be rebuilt as real React components over time, one section at a time.

## Deploy (Vercel)

Set the project **Root Directory** to **`web`**, add the same Supabase env vars in the Vercel dashboard (or mirror `web/.env.local`), and run the migration on production Supabase.
