import * as Joi from 'joi'

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production', 'test'),
  HOST: Joi.string().alphanum().default('localhost'),
  PORT: Joi.number().default(3000),
  ADMIN_PORT: Joi.number().default(4200),
  ADMIN_URL: Joi.string().default(`http://${process.env.HOST || 'localhost'}:${process.env.ADMIN_PORT}`),
  API_COOKIE_DOMAIN: Joi.string().default('localhost'),
  API_COOKIE_NAME: Joi.string().default('__session'),
  API_URL: Joi.string().default(`http://${process.env.HOST || 'localhost'}:${process.env.PORT}/api`),
})