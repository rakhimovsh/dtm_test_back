import express from 'express';
import path from 'path';
import cors from 'cors';

const app = express();

import routers from './modules/index.js';


app.use(cors());
app.use(express.json());
app.use(express.static(path.join(path.join(process.cwd(), 'src', 'uploads'))));
app.use('/v1', routers);


app.use((error, req, res, next) => {
  if (error.status != 500) {
    return res.status(error.status).json({
      status: error.status,
      message: error.message,
    });
  }

  fs.appendFileSync(path.join(process.cwd(), 'src', 'log.txt'),
    `${req.url}___${error.name}___${Date.now()}___${error.status}___${error.message}\n`,
  );

  res.status(error.status).json({
    status: error.status,
    message: 'InternalServerError',
  });

  process.exit();


});


app.listen(process.env.PORT || 5000, () => console.log('server run'));
