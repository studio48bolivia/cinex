create extension if not exists "uuid-ossp";

create table if not exists waitlist_emails (
  id         uuid        primary key default uuid_generate_v4(),
  email      text        unique not null,
  created_at timestamptz default now(),
  source     text        default 'home'
);

create table if not exists archive_materials (
  id          uuid        primary key default uuid_generate_v4(),
  title       text        not null,
  description text,
  author      text,
  country     text,
  type        text        check (type in ('project', 'footage', 'film')) not null,
  license     text        default 'CC BY-SA 4.0',
  file_url    text,
  created_at  timestamptz default now()
);

alter table waitlist_emails enable row level security;
create policy "Anyone can insert their email"
  on waitlist_emails for insert with check (true);

alter table archive_materials enable row level security;
create policy "Anyone can read archive"
  on archive_materials for select using (true);
create policy "Authenticated users can donate material"
  on archive_materials for insert to authenticated with check (true);
