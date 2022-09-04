import { InternalServerError, NotFoundError } from '../../lib/error.js';
import model from './model.js';


const GET_UNIVERSITIES = async (req, res, next) => {
  try {
    let universities = await model.GET(req.query);
    if (universities && universities.length != 0) {
      res.status(200).send({
        status: 200,
        data: universities,
      });
    } else {
      next(new NotFoundError(404, 'Ma`lumot topilmadi'));
    }
  } catch (err) {
    next(new InternalServerError(500, err.message));
  }
};

const GET_FACULTY = async (req, res, next) => {
  try {
    let faculty = await model.GET_FACULTY(req.params);
    if (faculty) {
      res.status(200).send({
        status: 200,
        data: faculty,
      });
    } else {
      next(new NotFoundError(404, 'Ma`lumot topilmadi'));
    }
  } catch (err) {
    next(new InternalServerError(500, err.message));
  }
};


export default { GET_UNIVERSITIES, GET_FACULTY };