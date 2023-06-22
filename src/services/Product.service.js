import { faker } from '@faker-js/faker';

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
        id: i + 1,
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        img: faker.image.url(),
        body: faker.commerce.productDescription(),
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
    if (!index === -1) {
      throw new Error('Product not found');
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
    const name = this.getTotal()//esto es de prueba para los middlewares de prueba
    return this.products.find((item) => item.id == id);
  }

  async delete(id) {
    const index = this.products.findIndex((item) => item.id == id);
    if (!index === -1) return this.products.splice(index, 1);
    console.log('product not found: ' + id);
  }
}

export default ProductsService;
