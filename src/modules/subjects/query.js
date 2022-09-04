export const GET_SUBJECTS = `
  select s.* from subjects s join added_subjects ads on s.subject_id = ads.first_subject_id group by s.subject_id
`;

export  const GET_OTHER_SUBJECTS = `select s.* from added_subjects ads join subjects s on s.subject_id = ads.second_subject_id where ads.first_subject_id = $1`