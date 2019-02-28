const express = require("express");
const router = express.Router();

const Book = require("../../models/Entity_Emp");

const emp = [
  new Entity_Emp("Ali", "Amr", "Souidan", new Date(98,2,14),"Lawyer","form A"),
];

router.get("/", (req, res) => res.json({ data: emp }));

module.exports = router;
