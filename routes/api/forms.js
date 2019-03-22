const express = require("express");
const Joi = require("joi");
const router = express.Router();
const uuid = require("uuid");

const Form = require("../../models/Form");
const Director = require("../../models/BoardOfDirector");
const Address = require("../../models/Address");
const Investor = require("../../models/Investor");

const validator = require("../../validations/formValidations");

const mongoose = require("mongoose");

// const forms = [1
//   new Form(
//     0,
//     "Laws drop down menu",
//     "Legal form of company drop down",
//     "SSC",
//     "???? ???????",
//     "Lina Productions",
//     "Apart2",
//     "Sheikh Zayed",
//     "Giza",
//     "012223533443",
//     "23344",
//     new Investor(
//       "Ms",
//       "Potato",
//       "Head",
//       "female",
//       "Egypt",
//       "individual",
//       "passport",
//       "22221123",
//       new Date("1970-03-25"),
//       new Address("Apart 2", "Sheikh Zayed", "Giza"),
//       "01111111111",
//       "fax",
//       "farmer@gmail.com",
//       10000000,
//       "EGP"
//     ),
//     "Euro",
//     500000,
//     [
//       new Director(
//         "Mohamed",
//         "individual",
//         "male",
//         "Egypt",
//         "passport",
//         "A2938920",
//         new Date("1970-03-25"),
//         "address",
//         "manager"
//       ),
//       new Director(
//         "Ali",
//         "individual",
//         "male",
//         "Egypt",
//         "passport",
//         "A2938920",
//         new Date("1970-03-25"),
//         "address",
//         "manager2"
//       )
//     ]
//   ),

//   new Form(
//     1,
//     "Laws drop down menu",
//     "Legal form of company drop down",
//     "SPC",
//     "لينا للانتاج",
//     "Lina Productions",
//     "Apart2",
 //    "Sheikh Zayed",
//     "Giza",
//     "012223533443",
//     "23344",
//     new Investor(
//       "Mrs",
//       "Potato",
//       "Head",
//       "male",
//       "Egypt",
//       "individual",
//       "passport",
//       "22221123",
//       new Date("1970-03-25"),
//       new Address("Apart 2", "Sheikh Zayed", "Giza"),
//       "01111111111",
//       "fax",
//       "farmera@gmail.com",
//       10000000,
//       "EGP"
//     ),
//     "Euro",
//     500000
//   )
// ];

router.get("/", (req, res) => res.json({ data: Forms }));
router.get("/byID/:id", (req, res) => {
  const id = req.params.id;
  const form = forms.find(form => form.id === id);
  res.json({ data: form })

});
router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  const form = forms.find(form => form.id === id);
  const index = forms.indexOf(form);
  forms.splice(index, 1);
  res.send(forms);
});



//creating new SPC form Mongo

router.post("/SPC/", async (req, res) => {
  try {
    const isValidated = validator.createValidation(req.body,'SPC');  
  if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const newForm = await Form.create(req.body);
    res.json({ msg: "Form was created successfully", data: newForm });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});
//creating new SSC form Mongo

router.post("/SSC", async (req, res) => {
  try {
    const isValidated = validator.createValidation(req.body,'SSC');  
  if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const newForm = await Form.create(req.body);
    res.json({ msg: "Form was created successfully", data: newForm });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});

//Updating a form
router.put("/update/:id", (req, res) => {
  const id = req.params.id;
  const formType = req.body.formType;
  const location = req.body.location; //location contain town,city,address
  const arabicName = req.body.arabicName;
  const englishName = req.body.englishName;
  const phone = req.body.phone;
  const fax = req.body.fax;
  const investor = req.body.investor; //investor array of info about current user
  const boardOfDirectors = req.body.boardOfDirectors; //table with BOD info
  const capitalCurr = req.body.capitalCurr;
  const capitalVal = req.body.capitalVal;
  const law = req.body.law;
  const legalForm = req.body.legalForm;
  const bitIL = req.body.bitIL;
  try {
    const isValidated = validator.createValidation(req.body, formType);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });

    const updatedForm = forms.find(function(form) {
      console.log("1");
      return form["id"] === id;
    });
    updatedForm["location"] = location;
    updatedForm["arabicName"] = arabicName;
    updatedForm["englishName"] = englishName;
    updatedForm["phone"] = phone;
    updatedForm["fax"] = fax;
    updatedForm["investor"] = investor;
    updatedForm["boardOfDirectors"] = boardOfDirectors;
    updatedForm["capitalCurr"] = capitalCurr;
    updatedForm["capitalVal"] = capitalVal;
    updatedForm["law"] = law;
    updatedForm["legalForm"] = legalForm;
    updatedForm["bitIL"] = bitIL;
    console.log("Form has been updated");
    return res.json({ data: updatedForm });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});

module.exports = router;
