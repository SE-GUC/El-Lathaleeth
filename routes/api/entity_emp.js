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

router.get("/revform/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const emp = await Entity_Emp.findById(id);
    if (!emp) return res.status(404).send({ error: "Reviewer does not exist" });
    const rev_form = await emp.reviewer_details.reviewed_forms;
    res.json({ data: rev_form });
  } catch (error) {
    console.log(error);
  }
});
router.get("/workSpace/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const findEmp = await Entity_Emp.findById(id);
    const pending_forms=[]
    const reviewed_forms=[]
    const filled_forms=[]
    if (!findEmp) return res.status(404).send({ error: "Employee does not exist" });
    if (findEmp.emp_type === 'Lawyer') {
      const emp = await Entity_Emp.findById(id)
        .populate("lawyer_details.pending_forms")
        .populate("lawyer_details.reviewed_forms").populate("lawyer_details.filled_forms")
      emp.lawyer_details.pending_forms.map(formID => {
        if (pending_forms.indexOf(formID) === -1) pending_forms.push(formID);
      });
      emp.lawyer_details.filled_forms.map(formID => {
        if (filled_forms.indexOf(formID) === -1)
          filled_forms.push(formID);
      });
      emp.lawyer_details.reviewed_forms.map(formID => {
        if (reviewed_forms.indexOf(formID) === -1)
          reviewed_forms.push(formID);
      });
    }
    else if(findEmp.emp_type==='Reviewer'){
      const emp = await Entity_Emp.findById(id)
        .populate("reviewer_details.pending_forms")
        .populate("reviewer_details.reviewed_forms")
      emp.reviewer_details.pending_forms.map(formID => {
        if (pending_forms.indexOf(formID) === -1)
          pending_forms.push(formID);
      });
      emp.reviewer_details.reviewed_forms.map(formID => {
        if (reviewed_forms.indexOf(formID) === -1)
          reviewed_forms.push(formID);
      });
    }
    res.json({ pending_forms: pending_forms, reviewed_forms: reviewed_forms, filled_forms: filled_forms});
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
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
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const emp = await Entity_Emp.findOne({ _id: id });
    if (!emp) return res.status(404).send({ error: "Employee does not exist" });
    const isValidated = validator.updateValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const updatedEmp = await Entity_Emp.findByIdAndUpdate(id, req.body, {
      new: true
    });
    res.json({ msg: "Employee updated successfully", data: updatedEmp });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteEmp = await Entity_Emp.findByIdAndDelete(id);
    res.json({ msg: "Employee successfully deleted" });
  } catch (error) {
    //Error will be handled later
  }
});
router.post("/deleteAll", async (req, res) => {
  try {
    console.log("test1");
    const deleteEmp = await Entity_Emp.remove({});
    console.log("test2");
    res.json({ msg: "Employee successfully deleted" });
  } catch (error) {
    console.log("error");
  }
});
//deletes all instances of investor in to be filled for
router.post("/lawyerfillform/:lawyerid/", async (req, res) => {
  try {
    const type = req.body.formType;

    const isValidated = formvalidator.createValidation(req.body, type);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const newForm = await Form.create(req.body);

    const lawyerid = req.params.lawyerid;
    await Entity_Emp.findByIdAndUpdate(
      lawyerid,
      { $push: { "lawyer_details.filled_forms": newForm.id } },
      { safe: true },
      function(err, doc) {
        if (err) {
          console.log(err);
        } else {
          //do stuff
        }
      }
    );
    res.json({ msg: "Form was created successfully", data: newForm });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});
router.post("/registerEmployee/:adminid/", async (req, res) => {
  try {
    const type = req.body.formType;

    const isValidated = validator.createValidation(req.body, type);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const newEmp = await Entity_Emp.create(req.body);

    const admin = req.params.adminid;
    await Entity_Emp.findByIdAndUpdate(
      admin,
      { $push: { "admin_details.registered_employees": newEmp.id } },
      { safe: true },
      function(err, doc) {
        if (err) {
          console.log(err);
        } else {
          //do stuff
        }
      }
    );
    res.json({ msg: " was created successfully", data: newEmp });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});

router.put("/reserveForm/:idl/:id", async (req, res) => {
  try {
    const idl = req.params.idl;
    const id = req.params.id;
    const form = await Form.findById(id);
    if (!form) return res.status(404).send({ error: "Form does not exist" });
    const findLawyer = await Entity_Emp.findById(idl);
    if (!findLawyer)
      return res.status(404).send({ error: "Employee does not exist" });
      else
      if(findLawyer.emp_type==='Lawyer'){
        const updatedForm = await Form.findByIdAndUpdate(
          id,
          {
            $set: {
              status: "pending"
            }
          },
          { new: true }
        );
        await Entity_Emp.findByIdAndUpdate(
          idl,
          { $push: { "lawyer_details.pending_forms": updatedForm.id } },
          { safe: true },
          function (err, doc) {
            if (err) {
              console.log(err);
            } else {
              //do stuff
            }
          }
        );
        res.json({ msg: "Form reserved successfully", data: updatedForm });
      } 
      else if(findLawyer.emp_type==='Reviewer'){
        const updatedForm = await Form.findByIdAndUpdate(
          id,
          {
            $set: {
              status: "pending"
            }
          },
          { new: true }
        );
        await Entity_Emp.findByIdAndUpdate(
          idl,
          { $push: { "reviewer_details.pending_forms": updatedForm.id } },
          { safe: true },
          function (err, doc) {
            if (err) {
              console.log(err);
            } else {
              //do stuff
            }
          }
        );
        res.json({ msg: "Form reserved successfully", data: updatedForm });
      }
      }
  catch (error) {
    console.log(error);
  }
   
});

module.exports = router;
