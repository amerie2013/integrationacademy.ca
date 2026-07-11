-- Per-class ordering of content items (lessons, assignments, quizzes) so a
-- teacher can sequence them; powers the Next/Previous flow. Run once.

create table if not exists class_order (
  class_id   uuid not null references classes (id) on delete cascade,
  item_type  text not null,            -- 'lesson' | 'assignment' | 'quiz'
  item_id    uuid not null,
  position   int  not null default 0,
  primary key (class_id, item_type, item_id)
);
alter table class_order enable row level security;

drop policy if exists "class order readable" on class_order;
create policy "class order readable" on class_order for select
  using (is_admin() or is_class_teacher(class_id) or is_class_member(class_id));

drop policy if exists "teacher manages class order" on class_order;
create policy "teacher manages class order" on class_order for all
  using (is_admin() or is_class_teacher(class_id))
  with check (is_admin() or is_class_teacher(class_id));
