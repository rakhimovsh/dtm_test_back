import { fetch, fetchAll } from '../../lib/postgres.js';
import { GET_SUBJECTS, GET_OTHER_SUBJECTS } from './query.js';

async function GET() {
  try {
    return await fetchAll(GET_SUBJECTS);
  } catch (e) {
    console.error(e);
  }
}

async function GET_OTHER(subjectId) {
  try {
    return await fetchAll(GET_OTHER_SUBJECTS, subjectId);
  } catch (e) {
    console.error(e);
  }
}


export default { GET, GET_OTHER };