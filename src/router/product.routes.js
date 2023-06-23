import { Router } from 'express';
import {
  create,
  products,
  product,
  updateProduct,
  deleteProduct,
} from '../controllers/product.controller.js';
import { validateSchema } from '../middleware/validator.middelware.js';
import {
  createProductSchema,
  getProductSchema,
  updateProductSchema,
} from '../schemas/product.schema.js';

const router = Router();

router.post('/register', validateSchema(createProductSchema, 'body'), create);
router.get('/products', products);
router.get(
  '/products/:id',
  validateSchema(getProductSchema, 'params'),
  product
);
router.patch(
  '/products/:id',
  validateSchema(getProductSchema, 'params'),
  validateSchema(updateProduct, 'body'),
  updateProduct
);
router.delete(
  '/products/:id',
  validateSchema(getProductSchema, 'params'),
  deleteProduct
);


export default router;
