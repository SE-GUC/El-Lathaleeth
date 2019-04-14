const Joi = require("joi");

module.exports = {

  createValidation: (request, investorType) => {
    
    const individualSchema = {
      firstName: Joi.string().required(),
      middleName: Joi.string(),
      lastName: Joi.string().required(),
      gender: Joi.any().valid(["male", "female"]), // Drop Down
      nationality: Joi.string(), // Drop Down
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
      capital: Joi.number(),
      capitalCurrency: Joi.string(), // Drop Down
      investorFormID: Joi.string().optional()
    };
    const companySchema = {
      firstName: Joi.string().required(),
      middleName: Joi.string(),
      lastName: Joi.string().required(),
      gender: Joi.any().valid(["male", "female"]), // Drop Down
      nationality: Joi.string(), // Drop Down
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
      capital: Joi.number(),
      capitalCurrency: Joi.string(), // Drop Down
      investorFormID: Joi.string().optional()
    };
    
    if (investorType === "individual") {
      return Joi.validate(request, individualSchema);
    } else if (investorType === "company") {
      return Joi.validate(request, companySchema);
    }

  },

  updateValidation: request => {

    const attributeSchema = {
      firstName: Joi.string().required(),
      middleName: Joi.string(),
      lastName: Joi.string().required(),
      gender: Joi.any().valid(["male", "female"]), // Drop Down
      nationality: Joi.string(), // Drop Down
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
      capital: Joi.number(),
      capitalCurrency: Joi.string(), // Drop Down
      investorFormID: Joi.string().optional()
    };

    return Joi.validate(request, attributeSchema);
  }
};
