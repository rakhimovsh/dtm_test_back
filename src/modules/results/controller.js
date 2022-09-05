import { InternalServerError, NotFoundError } from '../../lib/error.js';
import model from './model.js';


const GET = async (req, res, next) => {
  try {
    let results = await model.GET(req.params, req?.userId);
    if (results) {
      res.status(200).send({
        status: 200,
        data: results,
      });
    } else {
      next(new NotFoundError(404, 'Ma`lumot topilmadi'));
    }
  } catch (err) {
    next(new InternalServerError(500, err.message));
  }
};


export default { GET };