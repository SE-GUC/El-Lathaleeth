const express = require("express");
const Joi = require("joi");
const router = express.Router();
const uuid = require("uuid");

const Form = require("../../models/Form");
const Director = require("../../models/BoardOfDirector");
const Address = require("../../models/Address");
const Investor = require("../../models/Investor");

const validator = require("../../validations/formValidations");

const forms = [
  new Form(
    0,
    "Laws drop down menu",
    "Legal form of company drop down",
    "SSC",
    "???? ???????",
    "Lina Productions",
    "Apart2",
    "Sheikh Zayed",
    "Giza",
    "012223533443",
    "23344",
    new Investor(
      "Ms",
      "Potato",
      "Head",
      "female",
      "Egypt",
      "individual",
      "passport",
      "22221123",
      new Date("1970-03-25"),
      new Address("Apart 2", "Sheikh Zayed", "Giza"),
      "01111111111",
      "fax",
      "farmer@gmail.com",
      10000000,
      "EGP"
    ),
    "Euro",
    500000,
    [
      new Director(
        "Mohamed",
        "individual",
        "male",
        "Egypt",
        "passport",
        "A2938920",
        new Date("1970-03-25"),
        "address",
        "manager"
      ),
      new Director(
        "Ali",
        "individual",
        "male",
        "Egypt",
        "passport",
        "A2938920",
        new Date("1970-03-25"),
        "address",
        "manager2"
      )
    ]
  ),

  new Form(
    1,
    "Laws drop down menu",
    "Legal form of company drop down",
    "SPC",
    "لينا للانتاج",
    "Lina Productions",
    "Apart2",
    "Sheikh Zayed",
    "Giza",
    "012223533443",
    "23344",
    new Investor(
      "Mrs",
      "Potato",
      "Head",
      "male",
      "Egypt",
      "individual",
      "passport",
      "22221123",
      new Date("1970-03-25"),
      new Address("Apart 2", "Sheikh Zayed", "Giza"),
      "01111111111",
      "fax",
      "farmera@gmail.com",
      10000000,
      "EGP"
    ),
    "Euro",
    500000
  )
];

router.get("/", (req, res) => res.json({ data: forms }));

router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  const form = forms.find(form => form.id === id);
  const index = forms.indexOf(form);
  forms.splice(index, 1);
  res.send(forms);
});

router.post("/post", async (req, res) => {
  //const { } = req.body;
  const formType = req.body.formType;
  const location = new Address(req.body.location);
  const arabicName = req.body.arabicName;
  const englishName = req.body.englishName;
  const phone = req.body.phone;
  const fax = req.body.fax;
  const investor = req.body.investor;
  const boardOfDirectors = req.body.boardOfDirectors;
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
    const newForm = await {
      law,
      legalForm,
      formType,
      arabicName,
      englishName,
      location,
      phone,
      fax,
      investor,
      capitalCurr,
      capitalVal,
      bitIL,
      boardOfDirectors,
      id: uuid.v4()
    };
    forms.push(new Form(newForm));
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
  const location = new Address(req.body.location); //location contain town,city,address
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

  console.log(id);

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
});

module.exports = router;
