import express from 'express';

import productRouter from './router/product.routes.js'
import userRoutes from './router/user.routes.js'

import { errorHandler, logError } from './middleware/example.middleware.js'
const app = express();

app.use(express.json()) // json() es un middleware
app.use('/api', productRouter)
app.use('/api', userRoutes)

app.use(logError)
app.use(errorHandler)



export default app
