export const LOGINUSER = `select * from users where username = $1 and password = crypt($2, password)`;
export const REGISTERUSER = `insert into users (full_name,username, password) values ($1,$2, crypt($3, gen_salt('bf'))) returning *`;
export const ADDUSERINFO = `
insert into user_info (user_id, first_subject_id, second_subject_id, faculty_id) values ($1, $2, $3, $4) returning *`
