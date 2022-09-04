export const GET_UNIVERSITIES = `
  select 
  u.* ,
  json_agg(f.*) faculties
  from universities u 
  join 
  (select f.* from added_subjects a join faculties f on f.added_subjects_id = a.as_id where first_subject_id = $1 and second_subject_id = $2) f 
  on f.university_id = u.university_id
  group by u.university_id
`;

export const GET_FACULT = `
  select 
  f.*,
  u.university
  from faculties f 
  join universities u 
  on u.university_id = f.university_id
  where f.faculty_id = $1
`;