const express = require("express");
const router = express.Router();
const Joi = require("joi");

const Comment = require("../../models/Comment");
const validator = require("../../validations/commentValidation");

// const comments = [
//   new Comment("Reviewer", "ay 7aga", "comment text", "2019-1-1", "read"),
//   new Comment("Lawyer", "ay 7aga2", "comment text2", "2019-3-15", "not read")
// ];

router.post("/", async (req, res) => {
  try {
    const isValidated = validator.createValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const com = await Comment.create(req.body);
    res.json({ msg: "Comment was created successfully", data: com });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});

router.get("/", async (req, res) => {
  const com = await Comment.find();
  res.json({ data: com });
});
router.get("/byID/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const com = await Comment.findById(id)
    if (!com) return res.status(404).send({ error: "Comment does not exist" })
    res.json({ msg: "Comment found", data: com });
  }
  catch (error) {
    /// Error will be handled later
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const com = await Comment.findOne({ _id: id });
    if (!com) return res.status(404).send({ error: "Comment does not exist" });
    const isValidated = validator.updateValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });

    const updatedCom = await Comment.findByIdAndUpdate(id,req.body,{new:true});
    res.json({ msg: "Comment updated successfully" ,data: updatedCom});
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const com = await Comment.findByIdAndDelete(id);
    res.json({ msg: "Comment successfully deleted" });
  } catch (error) {
    //Error will be handled later
  }
});


module.exports = router;
