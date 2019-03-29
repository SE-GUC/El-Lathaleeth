const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Investor = require("../../models/Investor");
const validator = require("../../validations/investorValidations");
const Form = require("../../models/Form");

// GET: select * from investors
router.get("/get", async (req, res) => {
  const investors = await Investor.find();
  res.json({ data: investors });
});

// GET BY ID: select * from investors where id = _
router.get("/getbyID/:id", async (req, res) => {
  try {
    const id = req.params.id;
    //const investor = await Investor.findById(id)
    const investor = await Investor.findById(id);
    if (!investor)
      return res.status(404).send({ error: "Investor does not exist" });
    res.json({ msg: "Employee found", data: investor });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});

router.get("/getFormsByID/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const forms = await Form.find( { 'Form.formId' : id } );
    console.log(forms)
    if (!forms)
      return res.status(404).send({ error: "Investor does not have forms" });
    res.json({ msg: "forms found", data: forms });
  } catch (error) {
    console.log(error);
  }
});
// CREATE: insert into investors
router.post("/create", async (req, res) => {
  try {
    const isValidated = validator.createValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const newInvestor = await Investor.create(req.body);
    res.json({ msg: "Investor was created successfully", data: newInvestor });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});

// DELETE: delete * from investors where id = _
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedInvestor = await Investor.findByIdAndRemove(id);
    res.json({ msg: "Investor was deleted successfully" });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});

// UPDATE: update investors set _ = _ ...etc
router.put("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const investor = await Investor.findById(id);
    if (!investor)
      return res.status(404).send({ error: "Investor does not exist" });
    const isValidated = validator.updateValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const updatedInvestor = await Investor.updateOne(req.body);
    res.json({ msg: "Investor updated successfully" });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});

module.exports = router;
