
create table public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  subject text,
  message text not null,
  created_at timestamptz not null default now()
);

create table public.inquiries (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text not null,
  travel_type text,
  destination text,
  travel_date date,
  travellers int,
  message text,
  created_at timestamptz not null default now()
);

create table public.package_requests (
  id uuid primary key default gen_random_uuid(),
  package_id text,
  package_name text,
  full_name text not null,
  email text not null,
  phone text not null,
  travel_date date,
  travellers int,
  message text,
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;
alter table public.inquiries enable row level security;
alter table public.package_requests enable row level security;

create policy "anyone can submit contact messages"
  on public.contact_messages for insert to anon, authenticated with check (true);

create policy "anyone can submit inquiries"
  on public.inquiries for insert to anon, authenticated with check (true);

create policy "anyone can submit package requests"
  on public.package_requests for insert to anon, authenticated with check (true);

create index on public.contact_messages (created_at desc);
create index on public.inquiries (created_at desc);
create index on public.package_requests (created_at desc);
