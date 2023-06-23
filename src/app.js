import express from 'express';
import cors from 'cors'
import productRouter from './router/product.routes.js'
import userRoutes from './router/user.routes.js'

import { errorHandler, logError, boomHandler } from './middleware/example.middleware.js'
const app = express();


app.use(cors({
  origin: 'http://localhost:3001'
}));
app.use(express.json()) // json() es un middleware
app.use('/api', productRouter)
app.use('/api', userRoutes)

app.use(logError)
app.use(boomHandler)
app.use(errorHandler)



export default app
