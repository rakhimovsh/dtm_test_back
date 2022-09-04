import model from './model.js';
import jwt from '../../lib/jwt.js';
import { AuthrizationError, ForbiddenError, InternalServerError } from '../../lib/error.js';

async function LOGIN(req, res, next) {
  try {
    let user = await model.LoginUser(req.body);
    if (user) {
      res.status(200).json({
        status: 200,
        message: 'you have been logged in successfully',
        token: jwt.sign({ user_id: user.user_id }),
      });
    } else {
      next(new AuthrizationError(402, 'Foydalanuvchi topilmadi'));
    }
  } catch (e) {
    next(new InternalServerError(500, e.message));
  }
}

async function REGISTER(req, res, next) {
  try {
    let user = await model.RegisterUser(req.body);
    if (user) {
      res.status(201).json({
        status: 201,
        message: 'you have been registered successfully',
        token: jwt.sign({ user_id: user.user_id }),
      });
    } else {
      next(new ForbiddenError(401, 'Xato ketdi'));
    }
  } catch (e) {
    next(new InternalServerError(500, e.message));
  }
}

async function INFO(req, res, next) {
  try {
    let info = await model.addInfo(req.body, req.userId);
    if (info) {
      res.status(201).json({
        status: 201,
        message: 'user information added successfully',
        data: info,
      });
    } else {
      next(new ForbiddenError(401, 'Xato ketdi'));
    }
  } catch (e) {
    next(new InternalServerError(500, e.message));
  }
}


export default { LOGIN, REGISTER, INFO };
