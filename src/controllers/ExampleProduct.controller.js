import { faker } from '@faker-js/faker';

export const registerProduct = (req, res) => {
  //const { id, name, price, img, body } = req.body;
  const body = req.body;

  res.json({
    "message": "Product created successfully",
    "data": body
  })
}

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


export const updateProduct = (req, res) => {
  const { id } = req.params;
  const body = req.body

  res.json({
    'message': "Product updated successfully",
    'dataUpdate':  body
  })
}


export const deleteProduct = (req, res) => {
  const{id} = req.params
  const body = req.body
  res.json({
    "message": "Product deleted successfully",
    "data": body
  })
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
