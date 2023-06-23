import Joi from 'joi';

const id = Joi.string().uuid();
const name = Joi.string().alphanum();
const price = Joi.number().integer();
const img = Joi.string();
const body = Joi.string();
const isBlocked = Joi.boolean();

export const createProductSchema = Joi.object({
  id: id,
  name: name.required(),
  price: price.required(),
  img: img.required(),
  body: body.required(),
  isBlocked: isBlocked,
});

export const updateProductSchema = Joi.object({
  name: name,
  price: price,
  img: img,
  body: body,
  isBlocked: isBlocked,
})

export const getProductSchema = Joi.object({
  id: id.required()
})

