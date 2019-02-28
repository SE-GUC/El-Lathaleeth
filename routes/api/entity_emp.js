const express = require("express");
const router = express.Router();
const Joi = require("joi");

const Entity_Emp = require("../../models/Entity_Emp");

const emp = [
  new Entity_Emp("Ali", "Amr", "Souidan", "1998-02-14", "Lawyer", "form A"),
  new Entity_Emp(
    "Ahmed",
    "Amr",
    "Souidan",
    "1998-01-13",
    "Reviewer", //would be a reviewer object
    "form B" //form would be an array of form objects
  )
];

router.get("/", (req, res) => res.json({ data: emp }));

router.post("/", (req, res) => {
  const firstName = req.body.firstName;
  const middleName = req.body.middleName;
  const lastName = req.body.lastName;
  const username = req.body.username;
  const password = req.body.password;
  const emp_type = req.body.emp_type;
  const form = req.body.form;
  const dateOfBirth = req.body.dateOfBirth;
  const schema = {
    firstName: Joi.string()
      .min(3)
      .required(),
    middleName: Joi.string()
      .min(3)
      .required(),
    lastName: Joi.string()
      .min(3)
      .required(),
    username: Joi.string().required(),
    password: Joi.string()
      .min(6)
      .required(),
    dateOfBirth: Joi.date().required(),
    emp_type: Joi.required(),
    form: Joi.required()
  };

  const result = Joi.validate(req.body, schema);

  if (result.error)
    return res.status(400).send({ error: result.error.details[0].message });

  const newEmp = {
    username,
    password,
    firstName,
    middleName,
    lastName,
    dateOfBirth,
    emp_type,
    form
  };
  emp.push(new Entity_Emp(newEmp));
  return res.json({ data: newEmp });
});
router.post("/update", (req, res) => {
  console.log("0")
  const id = req.body.id;
  const firstName = req.body.firstName;
  const middleName = req.body.middleName;
  const lastName = req.body.lastName;
  const username = req.body.username;
  const password = req.body.password;
  const emp_type = req.body.emp_type;
  const form = req.body.form;
  const dateOfBirth = req.body.dateOfBirth;
  const schema = {
    firstName: Joi.string()
      .min(3)
      .required(),
    middleName: Joi.string()
      .min(3)
      .required(),
    lastName: Joi.string()
      .min(3)
      .required(),
    username: Joi.string().required(),
    password: Joi.string().min(6).required(),
    dateOfBirth: Joi.date().required(),
    emp_type: Joi.required(),
    form: Joi.required(),
    id: Joi.required()
  };

  const result = Joi.validate(req.body, schema);

  if (result.error)
    return res.status(400).send({ error: result.error.details[0].message });
  const updatedEmp = emp.find(function(user) {
    console.log("1")
    return user["id"] === id;
  });
  updatedEmp["firstName"] = firstName;
  updatedEmp["middleName"] = middleName;
  updatedEmp["lastName"] = lastName;
  updatedEmp["username"] = username;
  updatedEmp["password"] = password;
  updatedEmp["form"] = form;
  updatedEmp["emp_type"] = emp_type;
  updatedEmp["dateOfBirth"] = dateOfBirth;
  console.log("3")
  return res.json({ data: updatedEmp });
});
module.exports = router;
