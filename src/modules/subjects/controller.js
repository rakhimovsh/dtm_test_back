import { InternalServerError, NotFoundError } from '../../lib/error.js';
import model from './model.js';


const GET = async (req, res, next) => {
  try {
    const subjectId = req.params?.subjectId;
    let subjects = await model.GET();
    if (subjects) {
      if (subjectId) {
        subjects = await model.GET_OTHER(subjectId);
      }
      res.status(200).send({
        status: 200,
        data: subjects,
      });
    } else {
      next(new NotFoundError(404, 'Ma`lumot topilmadi'));
    }
  } catch (err) {
    next(new InternalServerError(500, err.message));
  }
};


export default { GET };