-- Default the hint tutor ON for newly created assignments (existing rows were
-- bulk-enabled separately). Teachers can still turn it OFF per assignment
-- (e.g. for tests/exams) via the editor checkbox.
alter table assignments alter column tutor_enabled set default true;
