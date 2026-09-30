-- COTech blog CMS (Phase 1)

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  role text not null default 'editor' check (role in ('admin', 'editor')),
  full_name text,
  created_at timestamptz not null default now()
);

create type public.blog_post_status as enum ('draft', 'published');

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text,
  body text not null default '',
  cover_image_path text,
  category text,
  status public.blog_post_status not null default 'draft',
  published_at timestamptz,
  author_id uuid references auth.users (id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists blog_posts_status_published_at_idx
  on public.blog_posts (status, published_at desc nulls last);

create or replace function public.set_blog_posts_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists blog_posts_updated_at on public.blog_posts;
create trigger blog_posts_updated_at
  before update on public.blog_posts
  for each row execute function public.set_blog_posts_updated_at();

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  );
$$;

alter table public.profiles enable row level security;
alter table public.blog_posts enable row level security;

-- Profiles: users read own row; admins read all
create policy "profiles_select_own"
  on public.profiles for select
  to authenticated
  using (auth.uid() = id or public.is_admin());

create policy "profiles_admin_all"
  on public.profiles for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

-- Blog: public reads published
create policy "blog_posts_select_published"
  on public.blog_posts for select
  to anon, authenticated
  using (status = 'published');

create policy "blog_posts_admin_select"
  on public.blog_posts for select
  to authenticated
  using (public.is_admin());

create policy "blog_posts_admin_insert"
  on public.blog_posts for insert
  to authenticated
  with check (public.is_admin());

create policy "blog_posts_admin_update"
  on public.blog_posts for update
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

create policy "blog_posts_admin_delete"
  on public.blog_posts for delete
  to authenticated
  using (public.is_admin());

-- Storage bucket (run in Supabase dashboard if SQL insert fails on hosted)
insert into storage.buckets (id, name, public)
values ('blog-media', 'blog-media', true)
on conflict (id) do nothing;

create policy "blog_media_public_read"
  on storage.objects for select
  to anon, authenticated
  using (bucket_id = 'blog-media');

create policy "blog_media_admin_write"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'blog-media' and public.is_admin());

create policy "blog_media_admin_update"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'blog-media' and public.is_admin())
  with check (bucket_id = 'blog-media' and public.is_admin());

create policy "blog_media_admin_delete"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'blog-media' and public.is_admin());
