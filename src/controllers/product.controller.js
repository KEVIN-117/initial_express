import ProductsService from '../services/Product.service.js';

const productsService = new ProductsService(20);

export const products = async (req, res) => {
  const products = await productsService.find();
  res.json(products);
};

export const product = async (req, res, next) => {
  try {
    const { id } = req.params;

    const productg = await productsService.findOne(id);

    res.json(productg);
  } catch (err) {
    next(err);//captura el error de manera explicita para cuando ocurre un error pasara al nexts y ejecutara lso middleware de error
  }
};

export const create = async (req, res) => {
  const body = req.body;

  const product = await productsService.create(body);

  res.json(product);
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = productsService.update(id, body);

  // if(!product){
  //   res.json({"message": "Product not found"})
  // } //return console.log('product not found');
  // else
  res.json(product);
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const product = productsService.delete(id);

  // if(!product){
  //   res.json({"message": "Product not found"})
  // } //return console.log('product not found');
  // else
  res.json(product);
};
