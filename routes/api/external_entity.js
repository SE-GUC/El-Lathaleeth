const express = require("express");
const Joi = require("joi");
const router = express.Router();
const mongoose = require('mongoose')
const external_entity = require("../../models/external_entity");
const validator = require("../../validations/external_entityValidations");

router.get('/', async (req,res) => {
  const entities = await external_entity.find()
  res.json({data: entities})
})

//create external entity
router.post("/", async (req, res) => {
  try{
  const isValidated = validator.createValidation(req.body);
  if (isValidated.error)
    return res
      .status(400)
      .send({ error: isValidated.error.details[0].message })
  const newExternal_entity = await external_entity.create(req.body)
  return res.json({ data: newExternal_entity })
  }
  catch(error) {
    console.log(error)
}  
});
//update
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const external_entity = await external_entity.findOne({id})
    if(!external_entity) return res.status(404).send({error: 'external_entity does not exist'})
    const isValidated = validator.updateValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const updated_external_entity = await external_entity.updateOne(req.body)
    return res.json({msg: 'Book updated successfully'})
  } 
  catch (error) {
    console.log(error);
  }
});
//delete
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleted_external_entity = await external_entity.findByIdAndRemove(id)
    res.json({data: deleted_external_entity})
    }
  catch (error) {
    console.log(error);
  }
});

module.exports = router;
