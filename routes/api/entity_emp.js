const express = require("express");
const router = express.Router();
const Joi = require("joi");

const Entity_Emp = require("../../models/Entity_Emp");
const Reviewer = require("../../models/Reviewer");
const Lawyer = require("../../models/Lawyer");
const validator = require('../../validations/entity_empValidations');
const Form = require("../../models/Form");
const Admin = require("../../models/Admin");

const emp = [
  new Entity_Emp(
    "Alsouidan",
    "msh h2ool",
    "Hi@gmail.com",
    "Ali",
    "Amr",
    "Souidan",
    "1998-02-14",
    "Lawyer",
    new Lawyer("formA", "FormB", "mo7amy 5ol3", "Bsc."),
    "2018-02-15"
  ),
  new Entity_Emp(
    "Souidan",
    "bardo msh ha2ool",
    "bye@hotmail.com",
    "Ahmed",
    "Amr",
    "Souidan",
    "1998-01-13",
    "Reviewer", //would be a reviewer object
    new Reviewer("formA", "FormB"),
    "2018-02-14"
  )
];

router.get("/", (req, res) => res.json({ data: emp }));

router.post("/", (req, res) => {
  const firstName = req.body.firstName;
  const middleName = req.body.middleName;
  const lastName = req.body.lastName;
  const username = req.body.username;
  console.log(username)
  const email=req.body.email;
  const password = req.body.password;
  const emp_type = req.body.emp_type;
  const emp_details = req.body.emp_details;
  const joined_on = req.body.joined_on;
  const dateOfBirth = req.body.dateOfBirth;
  const isValidated = validator.createValidation(req.body)



  if (isValidated.error)
    return res.status(400).send({ error: isValidated.error.details[0].message });

  const newEmp = new Entity_Emp(
    username,
    password,
    email,
    firstName,
    middleName,
    lastName,
    dateOfBirth,
    emp_type,
    emp_details,
    joined_on)
  ;
  emp.push(newEmp);
  return res.json({ data: newEmp });
});
router.put('/update/:id',  (req, res) => {
  console.log("0");
  const id = req.params.id;
  const firstName = req.body.firstName;
  const middleName = req.body.middleName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const emp_type = req.body.emp_type;
  const dateOfBirth = req.body.dateOfBirth;
  const joined_on = req.body.joined_on;
  const emp_details = req.body.emp_details;
  const isValidated = validator.createValidation(req.body)

  
console.log(id)


  if (isValidated.error)
    return res.status(400).send({ error: isValidated.error.details[0].message });
  const updatedEmp = emp.find(function(user) {
    console.log("1");
    return user["id"] === id;
  });
  updatedEmp["firstName"] = firstName;
  updatedEmp["middleName"] = middleName;
  updatedEmp["lastName"] = lastName;
  updatedEmp["username"] = username;
  updatedEmp["password"] = password;
  updatedEmp["emp_type"] = emp_type;
  updatedEmp["dateOfBirth"] = dateOfBirth;
  updatedEmp["emp_details"] = emp_details;
  updatedEmp["joined_on"] = joined_on;
  updatedEmp["email"] = email;
  console.log("3");
  return res.json({ data: updatedEmp });
});

router.delete("/delete/:id", (req, res) => {
  console.log(9)
  const id = req.params.id;
  const employee = emp.find(emp => emp.id === id);
  const index = emp.indexOf(employee);
  if(index>=0){
  emp.splice(index,1);}
  res.send(emp);
});
module.exports = router;
