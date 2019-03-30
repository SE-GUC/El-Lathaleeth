const Joi = require("joi");

module.exports = {
  createValidation: request => {
    const attributeSchema = {
      firstName: Joi.string()
        .min(3)
        .required(),
      middleName: Joi.string().min(3),
      lastName: Joi.string()
        .min(3)
        .required(),
      gender: Joi.any()
        .valid(["male", "female"])
        .required(), // Drop Down
      nationality: Joi.string().required(), // Drop Down
      investorType: Joi.any()
        .valid(["individual", "company"])
        .required(), // Drop Down
      typeOfID: Joi.any()
        .valid(["passport", "id"])
        .required(), // Drop Down
      IDNumber: Joi.string()
        .min(8)
        .required(),
      dateOfBirth: Joi.date().required(),
      address: Joi.string().required(),
      phoneNumber: Joi.string().length(11),
      faxNumber: Joi.string(),
      creditCardNumber: Joi.string().creditCard(),
      email: Joi.string()
        .email()
        .required(),
      capital: Joi.number().required(),
      capitalCurrency: Joi.string().required(),// Drop Down
      investorFormID: Joi.string().optional()
    };

    return Joi.validate(request, attributeSchema);
  },
  updateValidation: request => {
    const attributeSchema = {
      firstName: Joi.string()
        .min(3)
        .required(),
      middleName: Joi.string().min(3),
      lastName: Joi.string()
        .min(3)
        .required(),
      gender: Joi.any()
        .valid(["male", "female"])
        .required(), // Drop Down
      nationality: Joi.string().required(), // Drop Down
      investorType: Joi.any()
        .valid(["individual", "company"])
        .required(), // Drop Down
      typeOfID: Joi.any()
        .valid(["passport", "id"])
        .required(), // Drop Down
      IDNumber: Joi.string()
        .min(8)
        .required(),
      dateOfBirth: Joi.date().required(),
      address: Joi.string().required(),
      phoneNumber: Joi.string().length(11),
      faxNumber: Joi.string(),
      creditCardNumber: Joi.string().creditCard(),
      email: Joi.string()
        .email()
        .required(),
      capital: Joi.number().required(),
      capitalCurrency: Joi.string().required(), // Drop Down
      investorFormID: Joi.string().optional()
    };

    return Joi.validate(request, attributeSchema);
  }
};
