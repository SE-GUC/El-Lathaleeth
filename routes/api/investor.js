const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Investor = require("../../models/Investor");
const validator = require("../../validations/investorValidations");
const Form = require("../../models/Form");
const tokenKey = require("../../config/keys").secretOrKey;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const formvalidator = require("../../validations/formValidations");
const passport = require("passport");

// GET: select * from investors
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const investors = await Investor.find();
    res.json({ data: investors });
  }
);

// GET BY ID: select * from investors where id = _
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const id = req.params.id;
      const investor = await Investor.findById(id);
      if (!investor)
        return res.status(404).send({ error: "Investor does not exist" });
      res.json({ msg: "Investor found", data: investor });
    } catch (error) {
      // We will be handling the error later
      console.log(error);
    }
  }
);

// CREATE: insert into investors
router.post(
  "/",
  async (req, res) => {
    try {
      const email = req.body.email;
      const password = req.body.password;
      const isValidated = validator.createValidation(
        req.body,
        req.body.investorType
      );
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });
      //return res.status(400).send({error: "Invalid datatype entered for one or more of the fields"});
      let inv = await Investor.findOne({ email });
      if (inv) return res.status(400).json({ email: "Email already exists" });
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salt);
      const newInvestor = await Investor.create({
        ...req.body,
        password: hashedPassword
      });
      res.json({ msg: "Investor was created successfully", data: newInvestor });
    } catch (error) {
      // We will be handling the error later
      console.log(error);
    }
  }
);

// DELETE: delete * from investors where id = _
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
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
  }
);

// UPDATE: update investors set _ = _ ...etc
router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const id = req.params.id;
      const investor = await Investor.findById(id);
      if (!investor)
        return res.status(404).send({ error: "Investor does not exist" });
      const isValidated = validator.updateValidation(
        req.body,
        req.body.investorType
      );
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });
      //return res
      //  .status(400)
      //  .send({
      //    error: "Invalid datatype entered for one or more of the fields"
      //  });
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
  }
);

router.post("/deleteAll/", async (req, res) => {
  try {
    const deleteInvestor = await Investor.remove({});
    res.json({ msg: "All Investors have been successfully deleted" });
  } catch (error) {
    //Error will be handled later
  }
});

//LOGIN: logs in investor if he/she exists
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Investor.findOne({ email });
    if (!user)
      return res.status(404).json({ email: "Email does not exist" });
    const match = bcrypt.compareSync(password, user.password);

    if (match) {

      const payload = {
        id: user._id,
        email: user.email,
        type: "investor"
      };

      const token = jwt.sign(payload, tokenKey, { expiresIn: "1h" });
      return res.json({
        token: `Bearer ${token}`,
        type: "investor",
        id: user._id
      });
    } else return res.status(400).send({ password: "Wrong password" });
  } catch (e) {}
});

module.exports = router;
