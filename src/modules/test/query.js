export const GET_TESTS = `
  select 
  t.*,
  json_agg(a.*) answers
  from tests t 
  left join  (select answer_id, answer, test_id from answers) a
  on t.test_id = a.test_id 
  join (select * from user_info where user_id = $1 order by created_at desc limit 1) ui on true
  where ui.first_subject_id = t.subject_id
  group by t.test_id
`;


export const GET_SECOND_TESTS = `
  select 
  t.*,
  json_agg(a.*) answers
  from tests t 
  left join  (select answer_id, answer, test_id from answers) a
  on t.test_id = a.test_id 
  join (select * from user_info where user_id = $1 order by created_at desc limit 1) ui on true
  where ui.first_subject_id = t.subject_id
  group by t.test_id
`;

export const GET_ANSWERS = `
  select
   a.*,
   t.subject_id 
  from answers a 
  join tests t 
  on t.test_id = a.test_id
`;
