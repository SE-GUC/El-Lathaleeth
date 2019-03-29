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

//creating new SPC form Mongo

router.post("/SPC/", async (req, res) => {
  try {
    const isValidated = validator.createValidation(req.body, "SPC");
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

router.post("/SSC/", async (req, res) => {
  try {
    const isValidated = validator.createValidation(req.body, "SSC");
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

module.exports = router;
