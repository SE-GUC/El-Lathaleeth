const Joi = require("joi");

module.exports = {
  createValidation: request => {
    const direcSchema = {
      email: Joi.string()
        .email()
        .required(),
      firstName: Joi.string()
        .min(3)
        .required(),
      middleName: Joi.string()
        .min(3)
        .required(),
      lastName: Joi.string()
        .min(3)
        .required(),
      username: Joi.string().required(),
      password: Joi.string()
        .min(6)
        .required(),
      dateOfBirth: Joi.date().required(),
      emp_type: Joi.any()
        .valid(["Lawyer", "Reviewer", "Admin"])
        .required(),
      id: Joi.optional(),
      joined_on: Joi.date().required(),
      lawyer_details: Joi.optional(),
      admin_details: Joi.optional(),
      reviewer_details: Joi.optional()
    };

    return Joi.validate(request, direcSchema);
  },

  updateValidation: request => {
    const updateSchema = {
      email: Joi.string()
        .email()
        .required(),
      firstName: Joi.string()
        .min(3)
        .required(),
      middleName: Joi.string()
        .min(3)
        .required(),
      lastName: Joi.string()
        .min(3)
        .required(),
      username: Joi.string().required(),
      password: Joi.string()
        .min(6)
        .required(),
      dateOfBirth: Joi.date().required(),
      emp_type: Joi.any()
        .valid(["Lawyer", "Reviewer", "Admin"])
        .required(),
      id: Joi.optional(),
      joined_on: Joi.date().required(),
      lawyer_details: Joi.optional(),
      admin_details: Joi.optional(),
      reviewer_details: Joi.optional()
    };

    return Joi.validate(request, updateSchema);
  }
};
