import { fetchAll } from '../../lib/postgres.js';
import { GET_RESULTS } from './query.js';

async function GET({ resultId = 0 }, userId = 0) {
  try {
    return await fetchAll(GET_RESULTS, resultId, userId);
  } catch (e) {
    console.error(e);
  }
}


export default { GET };