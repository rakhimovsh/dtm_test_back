import { fetch } from '../../lib/postgres.js';
import { LOGINUSER, REGISTERUSER, ADDUSERINFO } from './query.js';

async function LoginUser({ username, password }) {
  try {
    return await fetch(LOGINUSER, username, password);
  } catch (e) {
    console.error(e);
  }
}

async function RegisterUser({ fullName, username, password }) {
  try {
    return await fetch(REGISTERUSER, fullName, username, password);
  } catch (e) {
    console.error(e);
  }
}

async function addInfo({ first_subject_id, second_subject_id, faculty_id }, userId) {
  try {
    return await fetch(ADDUSERINFO, userId, first_subject_id, second_subject_id, faculty_id);
  } catch (e) {
    console.error(e);
  }
}


export default { LoginUser, RegisterUser, addInfo };
