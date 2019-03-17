const express = require("express");
const Joi = require("joi");
const router = express.Router();
const external_entity = require("../../models/External_Entity");
const validator = require("../../validations/external_entityValidations");

const entities = [
  new external_entity(
    "external_entity1",
    "address1",
    24561987,
    1513,
    "external_entity1@gmail.com"
  ),
  new external_entity(
    "external_entity2",
    "address2",
    24561988,
    1866,
    "external_entity2@gmail.com"
  ),
  new external_entity(
    "external_entity3",
    "address3",
    24561989,
    1867,
    "external_entity3@gmail.com"
  )
];

router.get("/", (req, res) => res.json({ data: entities }));
router.get("/byID/:id", (req, res) => {
  const id = req.params.id;
  const ent = entities.find(ent => ent.id === id);
  res.json({ data: ent })

});
router.post("/", (req, res) => {
  const name = req.body.name;
  const address = req.body.address;
  const telephone = req.body.telephone;
  const fax = req.body.fax;
  const email = req.body.email;
  const isValidated = validator.createValidation(req.body);

  const newExternal_entity = new external_entity(
    name,
    address,
    telephone,
    fax,
    email
  );
  if (isValidated.error)
    return res
      .status(400)
      .send({ error: isValidated.error.details[0].message });
  entities.push(newExternal_entity);
  return res.json({ data: newExternal_entity });
});

router.put("/update/:id", (req, res) => {
  try {
    const id = req.params.id;
    const name = req.body.name;
    const address = req.body.address;
    const telephone = req.body.telephone;
    const fax = req.body.fax;
    const email = req.body.email;
    const isValidated = validator.createValidation(req.body);

    const newExternal_entity = new external_entity(
      name,
      address,
      telephone,
      fax,
      email
    );
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const entity = entities.find(entity => entity.id === id);
    entity["name"]=name
    entity["address"]=address
    entity["telephone"]=telephone
    entity["fax"]=fax
    entity["email"]=email
    res.send(entities);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const entity = entities.find(entity => entity.id === id);
    const index = entities.indexOf(entity);
    if (index >= 0) {
      entities.splice(index, 1);
    }
    res.send(entities);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
