-- Contact leads + editable site settings (admin dashboard)

create table if not exists public.contact_leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  company text,
  message text not null,
  status text not null default 'new' check (status in ('new', 'read', 'archived')),
  created_at timestamptz not null default now()
);

create index if not exists contact_leads_created_at_idx
  on public.contact_leads (created_at desc);

create index if not exists contact_leads_status_idx
  on public.contact_leads (status);

create table if not exists public.site_settings (
  key text primary key,
  value jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

insert into public.site_settings (key, value)
values (
  'contact',
  jsonb_build_object(
    'email', 'info@cotechme.com',
    'phone', '+971586188058',
    'phoneDisplay', '+971 58 618 8058',
    'whatsapp', 'https://wa.me/971586188058',
    'whatsappDisplay', 'WhatsApp',
    'mapLat', 25.1867,
    'mapLng', 55.2744,
    'inquiryNote', 'We reply with next-step clarity — not a sales script.'
  )
)
on conflict (key) do nothing;

alter table public.contact_leads enable row level security;
alter table public.site_settings enable row level security;

-- Anyone can submit a lead (public contact form via server action + anon client)
create policy "contact_leads_anon_insert"
  on public.contact_leads for insert
  to anon, authenticated
  with check (
    char_length(name) between 1 and 200
    and char_length(email) between 3 and 320
    and char_length(message) between 1 and 8000
  );

create policy "contact_leads_admin_select"
  on public.contact_leads for select
  to authenticated
  using (public.is_admin());

create policy "contact_leads_admin_update"
  on public.contact_leads for update
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

create policy "contact_leads_admin_delete"
  on public.contact_leads for delete
  to authenticated
  using (public.is_admin());

-- Public read contact settings on marketing site
create policy "site_settings_public_read"
  on public.site_settings for select
  to anon, authenticated
  using (key in ('contact'));

create policy "site_settings_admin_all"
  on public.site_settings for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());
