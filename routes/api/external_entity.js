const express = require("express");
const Joi = require("joi");
const router = express.Router();
const mongoose = require("mongoose");
const external_entity = require("../../models/external_entity");
const validator = require("../../validations/external_entityValidations");
const axios = require("axios");
const Form = require("../../models/Form");
const passport = require("passport");
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const entities = await external_entity.find();
    res.json({ data: entities });
  }
);

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const id = req.params.id;
      const findExternal_entity = await external_entity.findById(id);
      if (!findExternal_entity)
        return res
          .status(404)
          .send({ error: "External entity does not exist" });
      res.json({ data: findExternal_entity });
    } catch (error) {
      console.log(error);
    }
  }
);

//create external entity
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
      const newExternal_entity = await external_entity.create(req.body);
      return res.json({ data: newExternal_entity });
    } catch (error) {
      console.log(error);
    }
  }
);
//update
router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const id = req.params.id;
      const external_ent = await external_entity.findOne({ _id: id });
      if (!external_ent)
        return res
          .status(404)
          .send({ error: "External entity does not exist" });
      const isValidated = validator.updateValidation(req.body);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });
      const updatedexternal_entity = await external_entity.findByIdAndUpdate(
        id,
        req.body,
        { new: true }
      );
      res.json({
        msg: "external_entity updated successfully",
        data: updatedexternal_entity
      });
    } catch (error) {
      console.log(error);
    }
  }
);
//delete
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const id = req.params.id;
      const deleted_external_entity = await external_entity.findByIdAndRemove(
        id
      );
      if (!deleted_external_entity)
        return res
          .status(404)
          .send({ error: "External entity does not exist" });
      res.json({ data: deleted_external_entity });
    } catch (error) {
      console.log(error);
    }
  }
);

router.post("/deleteAll/", async (req, res) => {
  try {
    const deletee = await external_entity.remove({});
    res.json({ msg: "Forms successfully deleted" });
  } catch (error) {
    //Error will be handled later
  }
});
//not tested
router.post(
  "/notifyExt/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const id = req.params.id;
      const form = await Form.findById(id);
      const exts = await external_entity.find();
      exts.forEach(async (err, item) => {
        await axios.post(item.url, form);
      });
      res.json({ msg: "All External Entities are notified" });
    } catch (error) {
      //Error will be handled later
    }
  }
);

module.exports = router;
