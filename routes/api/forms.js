const express = require("express");
const Joi = require("joi");
const router = express.Router();
const uuid = require("uuid");

const Form = require("../../models/Form");
const Director = require("../../models/BoardOfDirector");
const Address = require("../../models/Address");
const Investor = require("../../models/Investor");
const Entity_Emp = require("../../models/Entity_Emp");
const Admin = require("../../models/Admin");

const validator = require("../../validations/formValidations");
const commValidator =  require("../../validations/commentValidation");

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

router.get("/", async (req, res) => {
  const forms = await Form.find();
  res.json({ data: forms });
});

router.get("/byID/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const findform = await Form.findById(id);
    if (!findform)
      return res.status(404).send({ error: "Form does not exist" });
    res.json({ msg: "Form found", data: findform });
  } catch (error) {
    // Error will be handled later
  }
});
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteform = await Form.findByIdAndDelete(id);
    res.json({ msg: "Form successfully deleted" });
  } catch (error) {
    //Error will be handled later
  }
});

//As an investor/lawyer I can create Form
//creating new SPC/SSC form Mongo

router.post("/create/", async (req, res) => {
  const formType = req.body.formType;
  try {
    const isValidated = validator.createValidation(req.body, formType);
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

//As an investor/lawyer I can update Form
//Updating a form
router.put("/update/:id", async (req, res) => {
  try {
    var isValidated = null;
    const id = req.params.id;
    const form = await Form.findById(id);
    if (!form) return res.status(404).send({ error: "Form does not exist" });
    console.log(form.formType);
    if (form.formType === "SPC") {
      isValidated = validator.updateValidation(req.body, "SPC");
    } else {
      isValidated = validator.updateValidation(req.body, "SSC");
    }
    console.log(isValidated);

    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const updatedForm = await Form.updateOne(req.body);
    res.json({ msg: "Form updated successfully" });
  } catch (error) {
    console.log(error);
  }
});

//as an investor I can create comments on a form
router.put("/commentOnForm/:id", async (req, res) => {
  try{
    const id = req.params.id;
    const form = await Form.findById(id);
    if (!form) return res.status(404).send({ error: "Form does not exist"});
    const isValidated = commValidator.createValidation(req.body);
    if (isValidated.error)return res.status(400).send({ error: isValidated.error.details[0].message });
    const com = await Comment.create(req.body);
    const test =  await Form.findByIdAndUpdate(id,
      { $push: {comments: com}},
      { safe: true, upsert: true},
      function(err, doc){
        if(err){
          console.log(err);
        }else{
          //do stuff
        }
      }
    );
    res.json({data:test});
  }
  catch(error){
    console.log(error)
    //error will be handled later
  }
})

//As an investor I can have a lawyer fill my form
router.post("/sendToAdmin/:idi/:ida", async (req, res) => {
  //const investor = req.body.investor;
  //const formType = req.body.formType;
  const idi = req.params.idi;
  const ida = req.params.ida;
  const admin = await Entity_Emp.findByIdAndUpdate(
    {  ida },
    { $push: { investors_to_assign: idi } },
    { new: true },
    (err, doc) => {
      if (err) {
        console.log("Something wrong");
      }

      console.log(doc);
    }
  );
  return res.json({ msg: "sent info to admin" });
});
//As an investor/lawyer I can view status of form
router.get("/statusByID/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const findform = await Form.findById(id);
    if (!findform)
      return res.status(404).send({ error: "Form does not exist" });
    res.json({ msg: "Status found", data: findform.status });
  } catch (error) {
    // Error will be handled later
  }
});
router.get("/formComment/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const findform = await Form.findById(id);
    if (!findform)
      return res.status(404).send({ error: "Form does not exist" });
    res.json({ msg: "Comment form", data: findform.comments });
  } catch (error) {
    // Error will be handled later
  }
});

module.exports = router;
