-- Page SEO overrides + blog rich content / SEO fields

create table if not exists public.page_seo (
  page_key text primary key,
  path text not null unique,
  meta_title text,
  meta_description text,
  og_title text,
  og_description text,
  og_image_path text,
  canonical_url text,
  robots_index boolean not null default true,
  robots_follow boolean not null default true,
  focus_keyword text,
  updated_at timestamptz not null default now()
);

alter table public.page_seo enable row level security;

create policy "page_seo_public_read"
  on public.page_seo for select
  to anon, authenticated
  using (true);

create policy "page_seo_admin_write"
  on public.page_seo for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

alter table public.blog_posts
  add column if not exists meta_title text,
  add column if not exists meta_description text,
  add column if not exists og_title text,
  add column if not exists og_description text,
  add column if not exists og_image_path text,
  add column if not exists canonical_path text,
  add column if not exists body_format text not null default 'html'
    check (body_format in ('markdown', 'html')),
  add column if not exists seo_noindex boolean not null default false;
