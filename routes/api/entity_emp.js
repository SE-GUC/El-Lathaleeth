const express = require("express");
const router = express.Router();

const Entity_Emp = require("../../models/Entity_Emp");

const emp = [
  new Entity_Emp("Ali", "Amr", "Souidan", new Date(98,02,14),"Lawyer","form A"),
  new Entity_Emp("Ahmed", "Amr", "Souidan", new Date(98, 01, 13), "Reviewer", "form B"),
];

router.get("/", (req, res) => res.json({ data: emp }));

module.exports = router;
