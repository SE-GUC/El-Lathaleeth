const Joi = require('joi')

module.exports = {

    createValidation: (request) => {
        const empSchema = {
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
            emp_details: Joi.required()
        };
        const direcSchema = {
            author_type: Joi.string().valid(["Lawyer", "Reviewer"]).required(),
            author: Joi.object(empSchema),
            text: Joi.string().required(),
            read_at: Joi.optional(),
            postedOn: Joi.optional(),
            id:Joi.optional()
        }


        return Joi.validate(request, direcSchema)


    },

    updateValidation: request => {
        const empSchema = {
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
            emp_details: Joi.required()
        };
        const direcSchema = {
            author_type: Joi.string().valid(["Lawyer", "Reviewer"]).required(),
            author: Joi.object(empSchema),
            text: Joi.string().required(),
            read_at: Joi.optional(),
            postedOn: Joi.optional(),
            id: Joi.optional()
        }
        return Joi.validate(request, direcSchema)
    },
}