import express from 'express';
import cors from 'cors';
import productRouter from './router/product.routes.js';
import userRoutes from './router/user.routes.js';

import {
  errorHandler,
  logError,
  boomHandler,
} from './middleware/example.middleware.js';
const app = express();

app.use(express.json()); // json() es un middleware
const whitelist = ['http://localhost:8080', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  },
};
app.use(cors(options));
app.use('/api', productRouter);
app.use('/api', userRoutes);

app.use(logError);
app.use(boomHandler);
app.use(errorHandler);

export default app;
