const Joi = require('joi')

module.exports = {

    createValidation: (request) => {

        const direcSchema = {
            author_type: Joi.string().valid(["Lawyer", "Reviewer"]).required(),
            author: Joi.string().required(),
            text: Joi.string().required(),
            read_at: Joi.optional(),
            postedOn: Joi.optional(),
            id:Joi.optional()
        }


        return Joi.validate(request, direcSchema)


    },

    updateValidation: request => {

        return Joi.validate(request, updateSchema)
    },
}