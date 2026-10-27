-- ============================================================
-- Marketing email consent (CASL: express, opt-in, withdrawable).
--
--   • profiles.marketing_opt_in — false unless the user ticked the box.
--   • profiles.marketing_opt_in_at — when they last gave OR withdrew consent
--     (kept as the record of consent).
--   • Sign-up passes the checkbox as user metadata 'marketing_opt_in'; the
--     profile row created by handle_new_user() picks it up here. Google /
--     Microsoft sign-ups set it on /complete-profile; anyone can change it on
--     /profile.
--
-- Run once in the Supabase SQL Editor. Idempotent.
-- ============================================================

alter table profiles add column if not exists marketing_opt_in boolean not null default false;
alter table profiles add column if not exists marketing_opt_in_at timestamptz;

-- new profile: copy the sign-up checkbox from the auth user's metadata
create or replace function profiles_marketing_from_signup() returns trigger
  language plpgsql security definer set search_path = public as $$
begin
  select coalesce((u.raw_user_meta_data ->> 'marketing_opt_in')::boolean, false)
    into new.marketing_opt_in
    from auth.users u where u.id = new.id;
  new.marketing_opt_in := coalesce(new.marketing_opt_in, false);
  if new.marketing_opt_in then new.marketing_opt_in_at := now(); end if;
  return new;
end;
$$;
drop trigger if exists profiles_marketing_from_signup on profiles;
create trigger profiles_marketing_from_signup before insert on profiles
  for each row execute function profiles_marketing_from_signup();

-- any change of mind is time-stamped by the database, not the browser
create or replace function profiles_marketing_stamp() returns trigger
  language plpgsql as $$
begin
  if new.marketing_opt_in is distinct from old.marketing_opt_in then
    new.marketing_opt_in_at := now();
  else
    new.marketing_opt_in_at := old.marketing_opt_in_at;
  end if;
  return new;
end;
$$;
drop trigger if exists profiles_marketing_stamp on profiles;
create trigger profiles_marketing_stamp before update on profiles
  for each row execute function profiles_marketing_stamp();

notify pgrst, 'reload schema';
