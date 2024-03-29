const express = require("express");
const router = express.Router();
const Entity_Emp = require("../../models/Entity_Emp");
const validator = require("../../validations/entity_empValidations");
const formvalidator = require("../../validations/formValidations");
const Form = require("../../models/Form");
const tokenKey = require("../../config/keys").secretOrKey;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const emps = await Entity_Emp.find();
    res.json({ data: emps });
  }
);
// router.get("/law", async (req, res) => {
//   const emps = await Lawyer.find();
//   res.json({ data: emps });
// });

router.get(
  "/revform/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const id = req.params.id;
      const emp = await Entity_Emp.findById(id);
      if (!emp)
        return res.status(404).send({ error: "Reviewer does not exist" });
      const rev_form = await emp.reviewer_details.reviewed_forms;
      res.json({ data: rev_form });
    } catch (error) {
      console.log(error);
    }
  }
);
router.get("/workSpace/:id",
  passport.authenticate("jwt", { session: false }), async (req, res) => {
  try {
    const id = req.params.id;
    const findEmp = await Entity_Emp.findById(id);
    const pending_forms = [];
    const reviewed_forms = [];
    const filled_forms = [];
    if (!findEmp)
      return res.status(404).send({ error: "Employee does not exist" });
    if (findEmp.emp_type === "Lawyer") {
      const emp = await Entity_Emp.findById(id)
        .populate("lawyer_details.pending_forms")
        .populate("lawyer_details.reviewed_forms")
        .populate("lawyer_details.filled_forms");
      emp.lawyer_details.pending_forms.map(formID => {
        if (pending_forms.indexOf(formID) === -1) pending_forms.push(formID);
      });
      emp.lawyer_details.filled_forms.map(formID => {
        if (filled_forms.indexOf(formID) === -1) filled_forms.push(formID);
      });
      emp.lawyer_details.reviewed_forms.map(formID => {
        if (reviewed_forms.indexOf(formID) === -1) reviewed_forms.push(formID);
      });
    } else if (findEmp.emp_type === "Reviewer") {
      const emp = await Entity_Emp.findById(id)
        .populate("reviewer_details.pending_forms")
        .populate("reviewer_details.reviewed_forms");
      emp.reviewer_details.pending_forms.map(formID => {
        if (pending_forms.indexOf(formID) === -1) pending_forms.push(formID);
      });
      emp.reviewer_details.reviewed_forms.map(formID => {
        if (reviewed_forms.indexOf(formID) === -1) reviewed_forms.push(formID);
      });
    }
    res.json({
      pending_forms: pending_forms,
      reviewed_forms: reviewed_forms,
      filled_forms: filled_forms
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id",
  passport.authenticate("jwt", { session: false }), async (req, res) => {
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
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
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
  }
);
router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const id = req.params.id;
      const emp = await Entity_Emp.findOne({ _id: id });
      if (!emp)
        return res.status(404).send({ error: "Employee does not exist" });
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
  }
);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const id = req.params.id;
      const deleteEmp = await Entity_Emp.findByIdAndDelete(id);
      res.json({ msg: "Employee successfully deleted" });
    } catch (error) {
      //Error will be handled later
    }
  }
);
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
router.post(
  "/lawyerfillform/:lawyerid/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const type = req.body.formType;
      const incrementer = await Counter.findOne({ name: "formCount" });

      const isValidated = formvalidator.createValidation(req.body, type);
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
      const lawyerid = req.params.lawyerid;
      await Entity_Emp.findByIdAndUpdate(
        lawyerid,
        { $addToSet: { "lawyer_details.filled_forms": newForm.id } },
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
  }
);
router.post(
  "/registerEmployee/:adminid/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const email = req.body.email;
      const username = req.body.username;
      const password = req.body.password;

      const isValidated = validator.createValidation(req.body);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });
      let user = await Entity_Emp.findOne({ email });
      if (user) return res.status(400).json({ email: "Email already exists" });
      user = await Entity_Emp.findOne({ username });
      if (user)
        return res.status(400).json({ username: "Username already exists" });
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salt);
      const newEmp = await Entity_Emp.create({
        ...req.body,
        password: hashedPassword
      });

      const admin = req.params.adminid;
      await Entity_Emp.findByIdAndUpdate(
        admin,
        { $addToSet: { "admin_details.registered_employees": newEmp.id } },
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
  }
);

router.put(
  "/reserveForm/:idl/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const idl = req.params.idl;
      const id = req.params.id;
      const form = await Form.findById(id);
      if (!form) return res.status(404).send({ error: "Form does not exist" });
      const findLawyer = await Entity_Emp.findById(idl);
      if (!findLawyer)
        return res.status(404).send({ error: "Employee does not exist" });
      else if (findLawyer.emp_type === "Lawyer") {
        const updatedForm = await Form.findByIdAndUpdate(
          id,
          {
            $set: {
              status: "pending lawyer"
            }
          },
          { new: true }
        );
        await Entity_Emp.findByIdAndUpdate(
          idl,
          { $addToSet: { "lawyer_details.pending_forms": updatedForm.id } },
          { safe: true },
          function(err, doc) {
            if (err) {
              console.log(err);
            } else {
              //do stuff
            }
          }
        );
        res.json({ msg: "Form reserved successfully", data: updatedForm });
      } else if (findLawyer.emp_type === "Reviewer") {
        const updatedForm = await Form.findByIdAndUpdate(
          id,
          {
            $set: {
              status: "pending reviewer"
            }
          },
          { new: true }
        );
        await Entity_Emp.findByIdAndUpdate(
          idl,
          { $addToSet: { "reviewer_details.pending_forms": updatedForm.id } },
          { safe: true },
          function(err, doc) {
            if (err) {
              console.log(err);
            } else {
              //do stuff
            }
          }
        );
        res.json({ msg: "Form reserved successfully", data: updatedForm });
      }
    } catch (error) {
      console.log(error);
    }
  }
);
router.get(
  "/workSpace/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const id = req.params.id;
      const findEmp = await Entity_Emp.findById(id);
      const pending_forms = [];
      const reviewed_forms = [];
      const filled_forms = [];
      if (!findEmp)
        return res.status(404).send({ error: "Employee does not exist" });
      if (findEmp.emp_type === "Lawyer") {
        const emp = await Entity_Emp.findById(id)
          .populate("lawyer_details.pending_forms")
          .populate("lawyer_details.reviewed_forms")
          .populate("lawyer_details.filled_forms");
        emp.lawyer_details.pending_forms.map(formID => {
          if (pending_forms.indexOf(formID) === -1) pending_forms.push(formID);
        });
        emp.lawyer_details.filled_forms.map(formID => {
          if (filled_forms.indexOf(formID) === -1) filled_forms.push(formID);
        });
        emp.lawyer_details.reviewed_forms.map(formID => {
          if (reviewed_forms.indexOf(formID) === -1)
            reviewed_forms.push(formID);
        });
      } else if (findEmp.emp_type === "Reviewer") {
        const emp = await Entity_Emp.findById(id)
          .populate("reviewer_details.pending_forms")
          .populate("reviewer_details.reviewed_forms");
        emp.reviewer_details.pending_forms.map(formID => {
          if (pending_forms.indexOf(formID) === -1) pending_forms.push(formID);
        });
        emp.reviewer_details.reviewed_forms.map(formID => {
          if (reviewed_forms.indexOf(formID) === -1)
            reviewed_forms.push(formID);
        });
      }
      res.json({
        pending_forms: pending_forms,
        reviewed_forms: reviewed_forms,
        filled_forms: filled_forms
      });
    } catch (error) {
      console.log(error);
    }
  }
);
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await Entity_Emp.findOne({ username });
    if (!user)
      return res.status(404).json({ username: "Username does not exist" });
    const match = bcrypt.compareSync(password, user.password);

    if (match) {
      const payload = {
        id: user._id,
        name: user.username,
        email: user.email,
        type: user.emp_type
      };

      const token = jwt.sign(payload, tokenKey, { expiresIn: "1h" });
      return res.json({
        token: `Bearer ${token}`,
        type: user.emp_type,
        id: user._id
      });
    } else return res.status(400).send({ password: "Wrong password" });
  } catch (e) {}
});
module.exports = router;
