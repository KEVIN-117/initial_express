import { faker } from '@faker-js/faker';
import Boom from 'boom';

class ProductsService {
  size;
  constructor(size) {
    this.size = size;
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = this.size || 20;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.database.mongodbObjectId(),//i + 1,
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        img: faker.image.url(),
        body: faker.commerce.productDescription(),
        isBlocked: faker.datatype.boolean()
      });
    }
  }
  async create(data) {
    const newProduct = {
      id: ++this.size + 1,
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  async update(id, newData) {
    const index = this.products.findIndex((item) => item.id == id);
    if (index === -1) {
      throw Boom.notFound('Product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...newData,
    };
    return this.products[index];
  }

  async find() {
    return this.products;
  }

  async findOne(id) {
    //const name = this.getTotal()//esto es de prueba para los middlewares de prueba
    const product = this.products.find((item) => item.id == id);
    if(!product){
      throw Boom.notFound('Product not found');
    }else if(product.isBlocked){
      throw Boom.conflict('Product is blocked');
    }
    return product
  }

  async delete(id) {
    const index = this.products.findIndex((item) => item.id == id);
    if (index === -1 && !this.products.find((item) => item.id == id)) {
      throw Boom.notFound('Product not found');
    }
    return this.products.splice(index, 1);
  }
}

export default ProductsService;
