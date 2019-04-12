const express = require("express");
const router = express.Router();
const Form = require("../../models/Form");
const Entity_Emp = require("../../models/Entity_Emp");
const Counter = require("../../models/Counter");

const validator = require("../../validations/formValidations");
const commValidator = require("../../validations/commentValidation");

const mongoose = require("mongoose");

router.get("/", async (req, res) => {
  const forms = await Form.find();
  res.json({ data: forms });
});

router.get("/:id", async (req, res) => {
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
router.get("/getPending/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const emp = await Entity_Emp.findById(id)
      .populate("lawyer_details.pending_forms")
      .populate("reviewer_details.pending_forms");
    let forms = [];
    let formObjects = [];
    if (!emp) return res.status(404).send({ error: "Employee does not exist" });
    emp.lawyer_details.pending_forms.map(formID => {
      if (forms.indexOf(formID) === -1) forms.push(formID);
    });
    emp.reviewer_details.pending_forms.map(formID => {
      if (forms.indexOf(formID) === -1) forms.push(formID);
    });
    res.json({ msg: "Form found", data: forms });
  } catch (error) {
    // Error will be handled later
  }
});
router.get("/cost/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const findform = await Form.findById(id);
    if (!findform)
      return res.status(404).send({ error: "Form does not exist" });
    res.json({ msg: "Form found", data: findform.cost });
  } catch (error) {
    // Error will be handled later
  }
});
router.get("/byInvestorID/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const findInvestorform = await Form.find({ "investor.investorFormID": id });
    if (!findInvestorform)
      return res.status(404).send({ error: "Form does not exist" });
    res.json({ msg: "Form found", data: findInvestorform });
  } catch (error) {
    // Error will be handled later
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteform = await Form.findByIdAndDelete(id);
    const deletelawyerformpending = await Entity_Emp.updateMany(
      { emp_type: "Lawyer", "lawyer_details.pending_forms": id },
      { $pull: { "lawyer_details.pending_forms": id } }
    );
    const deletelawyerformreviewed = await Entity_Emp.updateMany(
      { emp_type: "Lawyer", "lawyer_details.reviewed_forms": id },
      { $pull: { "lawyer_details.reviewed_forms": id } }
    );
    const deletelawyerformfilled = await Entity_Emp.updateMany(
      { emp_type: "Lawyer", "lawyer_details.filled_forms": id },
      { $pull: { "lawyer_details.filled_forms": id } }
    );
    const deletereviewerformpending = await Entity_Emp.updateMany(
      { emp_type: "Reviewer", "reviewer_details.pending_forms": id },
      { $pull: { "reviewer_details.pending_forms": id } }
    );
    const deletereviewerformreviewed = await Entity_Emp.updateMany(
      { emp_type: "Reviewer", "reviewer_details.reviewed_forms": id },
      { $pull: { "reviewer_details.reviewed_forms": id } }
    );

    if (!deleteform)
      return res.status(404).send({ error: "Form Id Not Found" });
    res.json({ msg: "Form successfully deleted" });
  } catch (error) {
    //Error will be handled later
  }
});

//As an investor/lawyer I can create Form
//creating new SPC/SSC form Mongo

router.post("/", async (req, res) => {
  const formType = req.body.formType;
  try {
    const incrementer = await Counter.findOne({ name: "formCount" });
    const isValidated = validator.createValidation(req.body, formType);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const newForm = await Form.create({
      ...req.body,
      caseNumber: incrementer.count
    });
    const updatedCount = await Counter.findOneAndUpdate(
      { name: "formCount" },
      { $set: { count: incrementer.count + 1 } }
    );
    res.json({ msg: "Form was created successfully", data: newForm });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});

//As an investor/lawyer I can update Form
//Updating a form
router.put("/:id", async (req, res) => {
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
    const updatedForm = await Form.findByIdAndUpdate(id, req.body, {
      new: true
    });
    res.json({ msg: "Form updated successfully", data: updatedForm });
  } catch (error) {
    console.log(error);
  }
});

//as an investor I can create comments on a form
router.put("/commentOnForm/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const form = await Form.findById(id);
    if (!form) return res.status(404).send({ error: "Form does not exist" });
    const isValidated = commValidator.createValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const com = await Comment.create(req.body);
    const test = await Form.findByIdAndUpdate(
      id,
      {
        $addToSet: { comments: { ...com.toObject(), commentFormId: com._id } }
      },
      { safe: true, upsert: true },
      function(err, doc) {
        if (err) {
          console.log(err);
        } else {
          //do stuff
        }
      }
    );
    res.json({ data: test });
  } catch (error) {
    console.log(error);
    //error will be handled later
  }
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
router.post("/deleteAll/", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteForm = await Form.remove({});
    res.json({ msg: "Forms successfully deleted" });
  } catch (error) {
    //Error will be handled later
  }
});
//As as lawyer I can review form
router.put("/review/:idl/:id", async (req, res) => {
  try {
    const idl = req.params.idl;
    const id = req.params.id;
    const form = await Form.findById(id);
    if (!form) return res.status(404).send({ error: "Form does not exist" });
    const findLawyer = await Entity_Emp.findById(idl);
    if (!findLawyer)
      return res.status(404).send({ error: "Reviewer does not exist" });
    if (findLawyer.emp_type === "Lawyer") {
      const updatedForm = await Form.findByIdAndUpdate(
        id,
        {
          $set: {
            status: "lawyer check",
            lastTouch: "reviewed by lawyer: " + idl
          }
        },
        { new: true }
      );
      await Entity_Emp.findByIdAndUpdate(
        idl,
        {
          $addToSet: { "lawyer_details.reviewed_forms": updatedForm.id },
          $pull: { "lawyer_details.pending_forms": updatedForm.id }
        },
        { safe: true },
        function(err, doc) {
          if (err) {
            console.log(err);
          } else {
            //do stuff
          }
        }
      );
      res.json({ msg: "Form reviewed successfully", data: updatedForm });
    } else if (findLawyer.emp_type === "Reviewer") {
      const updatedForm = await Form.findByIdAndUpdate(
        id,
        {
          $set: {
            status: "reviewer check",
            lastTouch: "reviewed by reviewer: " + idl
          }
        },
        { new: true }
      );
      await Entity_Emp.findByIdAndUpdate(
        idl,
        {
          $addToSet: { "reviewer_details.reviewed_forms": updatedForm.id },
          $pull: { "reviewer_details.pending_forms": updatedForm.id }
        },
        { safe: true },
        function(err, doc) {
          if (err) {
            console.log(err);
          } else {
            //do stuff
          }
        }
      );
      res.json({ msg: "Form reviewed successfully", data: updatedForm });
    }
  } catch (error) {
    console.log(error);
  }
});
router.put("/formPaid/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const form = await Form.findById(id);
    if (!form) return res.status(404).send({ error: "Form does not exist" });
    const updatedForm = await Form.findByIdAndUpdate(
      id,
      {
        $set: {
          status: "paid"
        }
      },
      { new: true }
    );
    res.json({ msg: "Form paid successfully", data: updatedForm });
  } catch (error) {
    console.log(error);
  }
});
router.put("/generateCost/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const form = await Form.findById(id);
    let money;
    if (!form) return res.status(404).send({ error: "Form does not exist" });
    if (0.001 * form.capitalVal < 100) {
      money = 100;
    } else {
      if (0.001 * form.capitalVal > 1000) {
        money = 1000;
      } else {
        money = 0.001 * form.capitalVal;
      }
    }
    const updatedForm = await Form.findByIdAndUpdate(
      id,
      {
        $set: {
          cost: money
        }
      },
      { new: true }
    );
    res.json({ msg: "Form paid successfully", data: updatedForm });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
