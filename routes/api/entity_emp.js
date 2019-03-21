const express = require("express");
const router = express.Router();
const Joi = require("joi");
const mongoose = require("mongoose");
const Entity_Emp = require("../../models/Entity_Emp");
const Reviewer = require("../../models/Reviewer");
const Lawyer = require("../../models/Lawyer");
const validator = require("../../validations/entity_empValidations");
const Form = require("../../models/Form");
const Admin = require("../../models/Admin");

router.get("/", async (req, res) => {
  const emps = await Entity_Emp.find();
  res.json({ data: emps });
});

router.get("/byID/:id", (req, res) => {
  const id = req.params.id;
  const empl = emp.find(empl => empl.id === id);
  res.json({ data: empl });
});
router.post("/", async (req, res) => {
  try {
    const isValidated = validator.createValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const newEmp = await Entity_Emp.create(req.body);
    res.json({ msg: "Employee was created successfully", data: newEmp });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});
router.put("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const emp = await Entity_Emp.findOne({ _id: id });
    if (!emp) return res.status(404).send({ error: "Employee does not exist" });
    const isValidated = validator.updateValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const updatedEmp = await Entity_Emp.updateOne(req.body);
    res.json({ msg: "Employee updated successfully" });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
try{
  const id = req.params.id
  const deleteEmp =  await Entity_Emp.findByIdAndDelete(id)
  res.json({msg: "Employee deleted successfully"})
}
catch(error){
  //we will be handling the error later
}
});
module.exports = router;
