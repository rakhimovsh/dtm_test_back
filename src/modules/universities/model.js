import { fetch, fetchAll } from '../../lib/postgres.js';
import { GET_UNIVERSITIES, GET_FACULT} from './query.js';

async function GET({ first, second }) {
  try {
    return await fetchAll(GET_UNIVERSITIES, first, second);
  } catch (e) {
    console.error(e);
  }
}

async function GET_FACULTY({ facultyId }) {
  try {
    return await fetch(GET_FACULT, facultyId);
  } catch (e) {
    console.error(e);
  }
}


export default { GET, GET_FACULTY };