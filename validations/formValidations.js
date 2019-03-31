const Joi = require("joi");


module.exports = {
  createValidation: (request, formType) => {
    const empSchema ={
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
    const commentSchema = {
      author_type: Joi.string()
        .valid(["Lawyer", "Reviewer"])
        .required(),
      author: Joi.required(),
      text: Joi.string().required(),
      read_at: Joi.optional(),
      postedOn: Joi.optional(),
      id: Joi.optional()
    };

    const investorSchema = {
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
    const SPCschema = {
      law: Joi.string().required(), //drop down menu
      legalForm: Joi.string().required(), //drop down menu
      arabicName: Joi.string().required(), //make sure in next sprint that name of comapny is unique
      englishName: Joi.string(),
      address: Joi.string().required(),
      phone: Joi.string(),
      fax: Joi.string(),
      capitalCurr: Joi.string().required(), //drop down menu
      capitalVal: Joi.number()
        .positive()
        .required(),
      createdOn: Joi.date().required(),
      lastTouch: Joi.string(),
      status: Joi.string().valid(["posted","lawyer check","reviewer check","company declared"]),
      deadline: Joi.date(),
      bitIL: Joi.number().valid([0, 1]),
      comments: Joi.required(),
      formType: Joi.any()
        .valid(["SPC", "SSC"])
        .required(), //drop down menu
      investor: Joi.object(investorSchema).required()
    };

    const direcSchema = {
      address: Joi.string().required(),
      birthdate: Joi.date().required(), // automatically put according to id, must be greater than 21 years
      gender: Joi.any()
        .valid(["male", "female"])
        .required(), //drop down menu
      idNum: Joi.string()
        .min(8)
        .required(), //frontend validation on length
      name: Joi.string().required(),
      nationality: Joi.string().required(), //drop down menu, manager must be egypt if investor foreign
      position: Joi.string().required(), //drop down menu
      typeID: Joi.any()
        .valid(["passport", "id"])
        .required(), //drop down menu must be id if investor egypt
      typeInves: Joi.any()
        .valid(["individual", "company"])
        .required() //drop down menu
    };

    const SSCschema = {
      law: Joi.string().required(), //drop down menu
      legalForm: Joi.string().required(), //drop down menu
      arabicName: Joi.string().required(), //make sure in next sprint that name of comapny is unique
      englishName: Joi.string(),

      address: Joi.string().required(),

      phone: Joi.string().length(11),
      fax: Joi.string(),
      capitalCurr: Joi.string().required(), //drop down menu
      capitalVal: Joi.number()
        .min(50000)
        .max(999999999999)
        .required(),

      createdOn: Joi.date().required(),
      lastTouch: Joi.string(),
      status: Joi.string().valid(["posted","lawyer check","reviewer check","company declared"]),
      deadline: Joi.date(),
      bitIL: Joi.number()
      .valid([0, 1]),
      formType: Joi.any()
        .valid(["SPC", "SSC"])
        .required(), //drop down menu maybe same as up
      investor: Joi.object(investorSchema).required(),
      comments: Joi.required(),
      boardOfDirectors: Joi.array()
        .min(1)
        .items(Joi.object(direcSchema).required())
    };

    if (formType === "SPC") {
      return Joi.validate(request, SPCschema);
    } else if (formType === "SSC") {
      return Joi.validate(request, SSCschema);
    }
  },
  updateValidation: (request, formType) => {
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
    const commentSchema = {
      author_type: Joi.string()
        .valid(["Lawyer", "Reviewer"])
        .required(),
      author: Joi.required(),
      text: Joi.string().required(),
      read_at: Joi.optional(),
      postedOn: Joi.optional(),
      id: Joi.optional()
    };

    const investorSchema = {
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
      IDNumber: Joi.string().min(8).required(),
      dateOfBirth: Joi.date().required(),
      address: Joi.string().required(),
      phoneNumber: Joi.string().length(11),
      faxNumber: Joi.string(),
      creditCardNumber: Joi.string().creditCard(),
      email: Joi.string().email().required(),
      capital: Joi.number().required(),

      capitalCurrency: Joi.string().required(),// Drop Down
      investorFormID: Joi.string().optional(), 
      _id:Joi.optional()
      // Drop Down

    };

    const SPCschema = {
      law: Joi.string().required(), //drop down menu
      legalForm: Joi.string().required(), //drop down menu
      arabicName: Joi.string().required(), //make sure in next sprint that name of comapny is unique
      englishName: Joi.string(),
      address: Joi.string().required(),
      phone: Joi.string(),
      fax: Joi.string(),
      capitalCurr: Joi.string().required(), //drop down menu
      capitalVal: Joi.number()
        .positive()
        .required(),
      createdOn: Joi.date().required(),
      lastTouch: Joi.string(),
      status: Joi.string().valid(["posted","lawyer check","reviewer check","company declared"]),
      deadline: Joi.date(),
      bitIL: Joi.number(),
      comments: Joi.required(),
      formType: Joi.any()
        .valid(["SPC", "SSC"])
        .required(), //drop down menu
      investor: Joi.object(investorSchema).required()
    };

    const direcSchema = {
      address: Joi.string().required(),
      birthdate: Joi.date().required(), // automatically put according to id, must be greater than 21 years
      gender: Joi.any()
        .valid(["male", "female"])
        .required(), //drop down menu
      idNum: Joi.string()
        .min(8)
        .required(), //frontend validation on length
      name: Joi.string().required(),
      nationality: Joi.string().required(), //drop down menu, manager must be egypt if investor foreign
      position: Joi.string().required(), //drop down menu
      typeID: Joi.any()
        .valid(["passport", "id"])
        .required(), //drop down menu must be id if investor egypt
      typeInves: Joi.any()
        .valid(["individual", "company"])
        .required() //drop down menu
    };

    const SSCschema = {
      law: Joi.string().required(), //drop down menu
      legalForm: Joi.string().required(), //drop down menu
      arabicName: Joi.string().required(), //make sure in next sprint that name of comapny is unique
      englishName: Joi.string(),

      address: Joi.string().required(),

      phone: Joi.string().length(11),
      fax: Joi.string(),
      capitalCurr: Joi.string().required(), //drop down menu
      capitalVal: Joi.number()
        .min(50000)
        .max(999999999999)
        .required(),

      createdOn: Joi.date().required(),
      lastTouch: Joi.string(),
      status: Joi.string().valid(["posted","lawyer check","reviewer check","company declared"]),
      deadline: Joi.date(),
      bitIL: Joi.number(),
      formType: Joi.any()
        .valid(["SPC", "SSC"])
        .required(), //drop down menu maybe same as up
      investor: Joi.object(investorSchema).required(),
      comments: Joi.required(),
      boardOfDirectors: Joi.array()
        .min(1)
        .items(Joi.object(direcSchema).required())
    };

    if (formType === "SPC") {
      return Joi.validate(request, SPCschema);
    } else if (formType === "SSC") {
      return Joi.validate(request, SSCschema);
    }
  }
};
