const Joi = require("joi");

module.exports = {

  createValidation: request => {
    
    const attributeSchema = {
      firstName: Joi.string().required(),
      middleName: Joi.string(),
      lastName: Joi.string().required(),
      gender: Joi.any().valid(["male", "female"]).required(), // Drop Down
      nationality: Joi.string().required(), // Drop Down
      investorType: Joi.any().valid(["individual", "company"]).required(), // Drop Down
      typeOfID: Joi.any().valid(["passport", "id"]).required(), // Drop Down
      IDNumber: Joi.string().min(8).required(),
      dateOfBirth: Joi.date().required(),
      address: Joi.string().required(),
      phoneNumber: Joi.string().length(11),
      faxNumber: Joi.string(),
      creditCardNumber: Joi.string().creditCard(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
      investorFormID: Joi.string().optional()
    };

    return Joi.validate(request, attributeSchema);
  },

  updateValidation: request => {

    const attributeSchema = {
      firstName: Joi.string().required(),
      middleName: Joi.string(),
      lastName: Joi.string().required(),
      gender: Joi.any().valid(["male", "female"]).required(), // Drop Down
      nationality: Joi.string().required(), // Drop Down
      investorType: Joi.any().valid(["individual", "company"]).required(), // Drop Down
      typeOfID: Joi.any().valid(["passport", "id"]).required(), // Drop Down
      IDNumber: Joi.string().min(8).required(),
      dateOfBirth: Joi.date().required(),
      address: Joi.string().required(),
      phoneNumber: Joi.string().length(11),
      faxNumber: Joi.string(),
      creditCardNumber: Joi.string().creditCard(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
      investorFormID: Joi.string().optional()
    };

    return Joi.validate(request, attributeSchema);
  }
};
