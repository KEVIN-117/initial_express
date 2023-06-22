
//faker genera data fake
import { Router } from  'express'
import { registerProduct, getProducts, updateProduct, deleteProduct, getTask, getCatyegory, getUser, filterProduct } from '../controllers/ExampleProduct.controller';


const router = Router()

/**
 * *routing express
 */


router.post('/register', registerProduct)

router.get('/products', getProducts);

router.patch('/products/:id', updateProduct)

router.delete('/products/id', deleteProduct)

router.get('/product/filter', filterProduct)
//en el siguiente ruta de /product/id y /product/filter se genera un choque de rutas es decir a la ruta /product/filter a filter se le tomara como un id entonces la convecion que se debe de seguir es que las rutas dinamicas deben ir depues de las rutas staticas
router.get('/product/:id', getTask);
router.get('/product/filter', filterProduct)

//end-point con 2 parametros dinamicos
router.get('/category/:categoryId/products/:productId', getCatyegory);

//end-point con parametros query

//el end*point debe ir de la siguiente manera /users?limit=100&offset=200
router.get('/users', getUser);


/**
 * ?que es una RESTful API?
 * * REST => significa Representational State Transfer (Transferencia de estado representacional)
 * *Es una conveccion que se refiere a servicios web por protocolo HTTP
 * *Metodos:
 *      *-> Get: Obtener
 *      *-> Post: Crear
 *      !-> Delete: Eliminar
 *      *-> Put : Modificar / actualizar
 *      *-> Patch : Modificar / actualizar
 */


/**
 * *Separcion de reponsabilidades con express.Router
 */


export default router

