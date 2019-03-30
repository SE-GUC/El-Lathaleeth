const express = require("express");
const router = express.Router();
const Joi = require("joi");
const mongoose = require("mongoose");
const Entity_Emp = require("../../models/Entity_Emp");
const Reviewer = require("../../models/Reviewer");
const Lawyer = require("../../models/Lawyer");
const validator = require("../../validations/entity_empValidations");
const formvalidator = require("../../validations/formValidations");
// const Form = require("../../models/Form");
const Admin = require("../../models/Admin");

router.get("/", async (req, res) => {
  const emps = await Entity_Emp.find();
  res.json({ data: emps });
});
// router.get("/law", async (req, res) => {
//   const emps = await Lawyer.find();
//   res.json({ data: emps });
// });

router.get("/byID/:id", async (req, res) => {
  try {
    console.log(0);
    const id = req.params.id;
    const findEmp = await Entity_Emp.findById(id);
    console.log(findEmp);
    console.log(0);
    if (!findEmp)
      return res.status(404).send({ error: "Employee does not exist" });
    res.json({ msg: "Employee found", data: findEmp });
  } catch (error) {
    // Error will be handled later
  }
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
    const updatedEmp = await Entity_Emp.findByIdAndUpdate(id, req.body, { new: true });
    res.json({ msg: "Employee updated successfully" ,data:updatedEmp});
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteEmp = await Entity_Emp.findByIdAndDelete(id);
    res.json({ msg: "Employee successfully deleted" });
  } catch (error) {
    //Error will be handled later
  }
}); 
router.delete("/deleteAll/", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteEmp = await Entity_Emp.remove({});
    res.json({ msg: "Employee successfully deleted" });
  } catch (error) {
    //Error will be handled later
  }
}); 
//deletes all instances of investor in to be filled for
router.post("/lawyerfillform/:lawyerid/:investorid", async (req, res) => {
  try {
    const type = req.body.formType

      const isValidated = formvalidator.createValidation(req.body, type);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });
      const newForm = await Form.create(req.body);
    
  const lawyerid=req.params.lawyerid
  const investorid=req.params.investorid
  Entity_Emp.findByIdAndUpdate(lawyerid,
    { $pull: { "lawyer_details.to_be_filled_for": investorid } },
    { safe: true, upsert: true },
    function (err, doc) {
      if (err) {
        console.log(err);
      } else {
        //do stuff
      }
    }
  );
  res.json({ msg: "Form was created successfully", data: newForm });
  }
  catch (error) {
    // We will be handling the error later
    console.log(error);
  }

});

router.put("/assignLawyer/:lawyerid/:investorid/:adminid", async (req, res) => {
  try {
    const id = req.params.lawyerid;
    const investorid = req.params.investorid;
    const adminid = req.params.adminid;
    const emp = await Entity_Emp.findById( id);
    if (!emp) return res.status(404).send({ error: "Employee does not exist" });
    console.log(emp.emp_type);
      if(emp.emp_type!=='Lawyer')
        return res.status(400)
          .send("You must assign a Lawyer to fill form");
    
    // admin.admin_details.investors_to_assign.filter(function (value, index, arr) {

    //   return value !==investorid ;

    // }); 
    const emp1 = await Entity_Emp.findById(adminid);
    if (!emp1) return res.status(404).send({ error: "Employee does not exist" });
    console.log(emp1.emp_type);
    if (emp1.emp_type !== 'Admin')
      return res.status(400)
        .send("You must be an admin");
    Entity_Emp.findByIdAndUpdate(
      adminid, //not working as should
      { $pull: { "admin_details.investors_to_assign": investorid } },
      { safe:true},
      function(err, doc) {
        if (err) {
          console.log(err);
        } else {
          //do stuff
        }
      }
    );
    const admin = await Entity_Emp.findById(adminid)

    const test = await Entity_Emp.findByIdAndUpdate(id, 
      { $push: { "lawyer_details.to_be_filled_for": investorid } },
      { safe: true, upsert: true },
      function (err, doc) {
        if (err) {
          console.log(err);
        } else {
          //do stuff
        }
      }
    );
    res.json({ data:test });

  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});

module.exports = router;
