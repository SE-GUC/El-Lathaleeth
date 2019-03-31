const express = require("express");
const Joi = require("joi");
const router = express.Router();
const mongoose = require("mongoose");
const external_entity = require("../../models/external_entity");
const validator = require("../../validations/external_entityValidations");

router.get("/", async (req, res) => {
  const entities = await external_entity.find();
  res.json({ data: entities });
});

router.get("/byID/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const findExternal_entity = await external_entity.findById(id);
    if (!findExternal_entity)
      return res.status(404).send({ error: "External entity does not exist" });
    res.json({ data: findExternal_entity });
  } catch (error) {
    console.log(error);
  }
});

//create external entity
router.post("/create/", async (req, res) => {
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
});
//update
router.put("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const external_ent = await external_entity.findOne({ _id: id });
    if (!external_ent)
      return res.status(404).send({ error: "External entity does not exist" });
    const isValidated = validator.updateValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const updatedexternal_entity = await external_entity.findByIdAndUpdate(id, req.body, { new: true });
    res.json({ msg: "external_entity updated successfully", data: updatedexternal_entity });
  } catch (error) {
    console.log(error);
  }
});
//delete
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleted_external_entity = await external_entity.findByIdAndRemove(id);
    if (!deleted_external_entity)
      return res
        .status(404)
        .send({ error: "External entity does not exist" });
    res.json({ data: deleted_external_entity });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
