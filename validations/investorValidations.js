const Joi = require("joi");

module.exports = {
  createValidation: (request, investorType) => {
    const individualSchema = {
      name: Joi.string().required(),
      gender: Joi.any()
        .valid(["male", "female"])
        .required(), // Drop Down
      nationality: Joi.string().required(), // Drop Down
      investorType: Joi.any()
        .valid(["individual", "company"])
        .required(), // Drop Down
      typeOfID: Joi.any()
        .valid(["passport", "national id"])
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
      password: Joi.string()
        .min(6)
        .required(),
      investorFormID: Joi.string().optional()
    };
    const companySchema = {
      name: Joi.string().required(),
      nationality: Joi.string().required(), // Drop Down
      investorType: Joi.any()
        .valid(["individual", "company"])
        .required(), // Drop Down
      address: Joi.string().required(),
      phoneNumber: Joi.string().length(11),
      faxNumber: Joi.string(),
      creditCardNumber: Joi.string().creditCard(),
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .min(6)
        .required(),
      investorFormID: Joi.string().optional(),
      gender: Joi.string().allow(null,'').optional(),
      dateOfBirth: Joi.string().allow(null,'').optional(),
      typeOfID: Joi.string().allow(null,'').optional(),
      IDNumber: Joi.string().allow(null,'').optional(),
    };

    if (investorType === "individual") {
      return Joi.validate(request, individualSchema);
    } else if (investorType === "company") {
      return Joi.validate(request, companySchema);
    }
  },

  updateValidation: (request, investorType) => {
    const individualSchema = {
      name: Joi.string().required(),
      gender: Joi.any()
        .valid(["male", "female"])
        .required(), // Drop Down
      nationality: Joi.string().required(), // Drop Down
      investorType: Joi.any()
        .valid(["individual", "company"])
        .required(), // Drop Down
      typeOfID: Joi.any()
        .valid(["passport", "national id"])
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
      password: Joi.string()
        .min(6)
        .required(),
      investorFormID: Joi.string().optional()
    };
    const companySchema = {
      name: Joi.string().required(),
      nationality: Joi.string().required(), // Drop Down
      investorType: Joi.any()
        .valid(["individual", "company"])
        .required(), // Drop Down
      address: Joi.string().required(),
      phoneNumber: Joi.string().length(11),
      faxNumber: Joi.string(),
      creditCardNumber: Joi.string().creditCard(),
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .min(6)
        .required(),
      investorFormID: Joi.string().optional(),
      gender: Joi.string().allow(null,''),
      dateOfBirth: Joi.string().allow(null,''),
      typeOfID: Joi.string().allow(null,''),
      IDNumber: Joi.string().allow(null,''),
    };

    if (investorType === "individual") {
      return Joi.validate(request, individualSchema);
    } else if (investorType === "company") {
      return Joi.validate(request, companySchema);
    }
  }
};
