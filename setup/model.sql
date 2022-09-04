create database dtm;


CREATE EXTENSION pgcrypto;


drop table if exists users;
create table users(
    user_id serial primary key,
    full_name varchar(50) not null,
    username varchar(30) not null,
    password varchar(60) not null,
    status varchar(10) default 'active',
    created_at timestamp default current_timestamp
);


DROP TABLE IF EXISTS subjects CASCADE;
CREATE TABLE subjects (
    subject_id serial PRIMARY KEY NOT NULL,
    subject text NOT NULL
);

DROP TABLE IF EXISTS added_subjects CASCADE;
CREATE TABLE added_subjects (
    as_id serial PRIMARY KEY NOT NULL,
    first_subject_id int references subjects (subject_id),
    second_subject_id int references subjects (subject_id)
);


DROP TABLE IF EXISTS tests CASCADE;
CREATE TABLE tests (
    test_id serial PRIMARY KEY NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    subject_id int REFERENCES subjects (subject_id)
);


DROP TABLE IF EXISTS answers CASCADE;
CREATE TABLE answers (
    answer_id serial PRIMARY KEY NOT NULL,
    answer text NOT NULL,
    type boolean DEFAULT false,
    test_id int REFERENCES tests (test_id)
);



DROP TABLE IF EXISTS universities CASCADE;
CREATE TABLE universities (
    university_id serial PRIMARY KEY NOT NULL,
    university text NOT NULL
);


DROP TABLE IF EXISTS faculties CASCADE;
CREATE TABLE faculties (
    faculty_id serial PRIMARY KEY NOT NULL,
    faculty text NOT NULL,
    university_id int REFERENCES universities (university_id),
    grand_score int not null,
    grand_place int not null,
    contract_score int not null,
    contract_place int not null,
    added_subjects_id int references added_subjects (as_id)
);


DROP TABLE IF EXISTS passed_test CASCADE;
CREATE TABLE passed_test (
    pt_id serial PRIMARY KEY,
    user_id int references users (user_id),
    first_subject_id int references subjects (subject_id),
    second_subject_id int references subjects (subject_id),
    first_subject_true_answers int not null,
    second_subject_true_answers int not null
);

drop table if exists user_info cascade;
create table user_info (
    ui_id serial primary key,
    user_id int references users (user_id),
    first_subject_id int references subjects (subject_id),
    second_subject_id int references subjects (subject_id),
    faculty_id int references faculties (faculty_id),
    created_at timestamp default current_timestamp
);





-- DROP TABLE IF EXISTS user_faculties CASCADE;
-- CREATE TABLE user_faculties(
--     uf_id serial PRIMARY KEY,
--     user_id int references users (user_id),
--     faculty_one int references faculties (faculty_id),
--     faculty_two int references faculties (faculty_id),
--     faculty_three int references faculties (faculty_id),
--     faculty_four int references faculties (faculty_id),
--     faculty_five int references faculties (faculty_id)
-- );

-- create or replace procedure check_test(id_test int, id_answer int, user_id int) language plpgsql
-- $$
--  begin
--     if(select type from answers where test_id = id_test and answer_id = id_answer) then
--
--
--     end if;
--     commit;
--  end;
-- $$;


-- select
-- t.*,
-- json_agg(a.*) answers
-- from
-- tests t left join answers a on t.test_id = a.test_id
-- group by t.test_id;

