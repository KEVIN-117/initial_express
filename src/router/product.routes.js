import { Router } from "express";
import {create, products, product, updateProduct, deleteProduct } from '../controllers/product.controller.js'



const router = Router()

router.post('/register', create)
router.get('/products', products)
router.get('/products/:id', product)
router.patch('/products/:id', updateProduct)
router.delete('/products/:id', deleteProduct)





export default router
