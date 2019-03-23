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
router.post("/", async (req, res) => {
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
    const external_entity1 = await external_entity.findOne(id);
    if (!external_entity1)
      return res.status(404).send({ error: "External entity does not exist" });
    const isValidated = validator.updateValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const updatedexternal_entity = await external_entity.updateOne(req.body);
    res.json({ msg: "external_entity updated successfully" });
  } catch (error) {
    console.log(error);
  }
});
//delete
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleted_external_entity = await external_entity.findByIdAndRemove(id);
    res.json({ data: deleted_external_entity });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
