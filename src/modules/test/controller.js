import { InternalServerError, NotFoundError } from '../../lib/error.js';
import model from './model.js';
import mixArray from '../../utils/mixArray.js';


const GET = async (req, res, next) => {
  try {
    let firstSubjectTests = await model.GET_FIRST_SUBJECT(req.userId);
    let secondSubjectTests = await model.GET_SECOND_SUBJECT(req.userId);
    if (firstSubjectTests && secondSubjectTests) {
      res.status(200).send({
        status: 200,
        data: {
          firstSubjectTests: mixArray(firstSubjectTests),
          secondSubjectTests: mixArray(secondSubjectTests),
        },
      });
    } else {
      next(new NotFoundError(404, 'Ma`lumot topilmadi'));
    }
  } catch (err) {
    next(new InternalServerError(500, err.message));
  }
};

const CHECK = async (req, res, next) => {
  try {
    let test_result = await model.CHECK(req.body, req.userId);
    if (test_result) {
      res.status(200).send({
        status: 200,
        data: test_result,
      });
    } else {
      next(new NotFoundError(404, 'Ma`lumot topilmadi'));
    }
  } catch (err) {
    next(new InternalServerError(500, err.message));
  }
};


export default { GET, CHECK };