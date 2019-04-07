const Joi = require("joi");

module.exports = {
  createValidation: request => {
    const createSchema = {
      name: Joi.string()
        .min(3)
        .max(100)
        .required(),
      address: Joi.string()
        .min(3)
        .max(100)
        .required(),
      telephone: Joi.number().required(),
      fax: Joi.number().required(),
      email: Joi.string()
        .email()
        .required(),
      url: Joi.string().required()
    };

    return Joi.validate(request, createSchema);
  },

  updateValidation: request => {
    const updateSchema = {
      name: Joi.string()
        .min(3)
        .max(100),
      address: Joi.string()
        .min(3)
        .max(100),
      telephone: Joi.number(),
      fax: Joi.number(),
      email: Joi.string().email(),
      url: Joi.string().required()
    };
    return Joi.validate(request, updateSchema);
  }
};
