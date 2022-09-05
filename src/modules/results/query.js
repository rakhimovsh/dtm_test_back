export const GET_RESULTS = `
    select 
    r.*,
    fs.subject first_subject,
    ss.subject second_subject,
    u.username,
    f.faculty,
    un.university,
    case 
        when f.grand_score < r.result_score then 'grand'
        when f.contract_score < r.result_score then 'kontrak'
        else 'rad etildi'
    end as result
    from results r
    join users u on u.user_id = r.user_id 
    join subjects fs on fs.subject_id = r.first_subject_id
    join subjects ss on ss.subject_id = r.second_subject_id
    join user_info ui on ui.ui_id = r.ui_id
    join faculties f on f.faculty_id = ui.faculty_id
    join universities un on un.university_id = f.university_id
    where case when $1 > 0 then r.result_id = $1 else true end 
    and case when $2 > 0 then r.user_id = $2 else true end
    order by r.result_score desc
`;

