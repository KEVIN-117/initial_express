/**
 * !conociendo mas al metodo get
 * *GET: recibir parametros
 * *EndPoints: son las url de las rutas de una api
 * *http://localhost:3000/tasks/{id}/
 * *http://localhost:3000/people/{id}/
 * *http://localhost:3000/user/{id}/tasks/
 *
 * * si es una rita de get que haga referencia a products (http://localhost:3000/tasks) deberia de mostrar una lista de productos o tarea
 */
import { faker } from '@faker-js/faker';




export const getProducts = (req, res) => {
  const products = []
  const { size } = req.query
  const limit = size || 20
  for (let i = 0; i < limit; i++) {
    products.push({
      id: i+1,
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      img: faker.image.url(),
      body: faker.commerce.productDescription()
    })
  }
  res.json(products)
}

export const getTask = (req, res) => {
  const {id} = req.params
  res.json({
    id,
    name:'producto '+ id,
    categories: 'categoria '+ id,
    price: 1000
  })
}


export const getCatyegory = (req, res) => {
  const {categoryId, productId} = req.params
  res.json({
    categoryId,
    productId,
    name:'producto '+ productId,
    categories: 'categoria '+ categoryId,
    price: 1000
  })
}


/**
 * *-> GET: parámetros query
 * *-> muy utilizadfos para filtrar con ciertas especificacione o rangos que se le den,
 * *Ejemplos
 *    *-> api.example.com/products
 *    *-> api.example.com/products?page=1
 *    *-> api.example.com/products?limit=10&offset=0
 *    *-> api.example.com/products?region=USA
 *    *-> api.example.com/products?region=USA&brand=XYZ
 */

export const getUser = (req, res) => {
  const { limit, offset } = req.query

  if(!limit && !offset) res.json({"message": "No limit or offset"})
  else
    res.json({
      limit,
      offset
    })
}


//*-> end-point con filtraciones:

export const filterProduct = (req, res) => {
  res.json({
    message: 'this is a filtered product'
  })
}
