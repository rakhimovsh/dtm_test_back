import { fetch, fetchAll } from '../../lib/postgres.js';
import { GET_TESTS, GET_ANSWERS, GET_SECOND_TESTS } from './query.js';

async function GET_FIRST_SUBJECT(userId) {
  try {
    return await fetchAll(GET_TESTS,userId);
  } catch (e) {
    console.error(e);
  }
}

async function GET_SECOND_SUBJECT(userId) {
  try {
    return await fetchAll(GET_TESTS,userId);
  } catch (e) {
    console.error(e);
  }
}


async function CHECK({annwers}, userId) {
  try {
    let result = {
      user_id: userId,
      first_subject_true_answers: 0,
      second_subject_true_answers: 0
    }
    const allAnswers = await fetchAll(GET_ANSWERS);
  } catch (e) {
    console.error(e);
  }
}


export default { GET_FIRST_SUBJECT,GET_SECOND_SUBJECT, CHECK };