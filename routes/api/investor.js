const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Investor = require("../../models/Investor");
const validator = require("../../validations/investorValidations");
const Form = require("../../models/Form");
const formvalidator = require("../../validations/formValidations");

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

// CREATE: insert into investors
router.post("/create", async (req, res) => {
  try {
    const isValidated = validator.createValidation(req.body);
    if (isValidated.error)
      //return res.status(400).send({ error: isValidated.error.details[0].message });
      return res
        .status(400)
        .send({
          error: "Invalid datatype entered for one or more of the fields"
        });
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
    const investor = await Investor.findById(id);
    if (!investor)
      return res.status(404).send({ error: "Investor does not exist" });
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
      //return res.status(400).send({ error: isValidated.error.details[0].message });
      return res
        .status(400)
        .send({
          error: "Invalid datatype entered for one or more of the fields"
        });
    const updatedInvestor = await Investor.findByIdAndUpdate(id, req.body, {
      new: true
    });

    const up = await Form.update(
      { "investor.investorFormID": id }, //query
      { $set: { investor: updatedInvestor } },
      { multi: true }, //for multiple documents
      function(err, model) {
        if (err) {
          console.log(err);
          return res.send(err);
        }
      }
    );

    const up2 = await Form.update(
      { "investor._id": id }, //query
      { $set: { "investor.investorFormID": id } },
      { multi: true }, //for multiple documents
      function(err, model) {
        if (err) {
          console.log(err);
          return res.send(err);
        }
      }
    );

    res.json({
      msg: "Investor updated in investors and forms successfully",
      data: updatedInvestor
    });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});

router.delete("/deleteAll/", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteInvestor = await Investor.remove({});
    res.json({ msg: "All Investors have been successfully deleted" });
  } catch (error) {
    //Error will be handled later
  }
});

module.exports = router;
