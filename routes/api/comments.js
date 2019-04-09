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
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const com = await Comment.findById(id);
    if (!com) return res.status(404).send({ error: "Comment does not exist" });
    res.json({ msg: "Comment found", data: com });
  } catch (error) {
    /// Error will be handled later
  }
});
//doesn't update in form still needs more work, worst case we will remove the comments
// model due to its redundancy,
//its extremeley redundant as we can directly embed the comment object as a whole w 5alas,
//this can work we can put add a route in form directly that updates the embedded comment
// and not the one in the backend,short term solution as we still have the redundant collection
//note to self when you have time remove this entire mess.
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const com = await Comment.findOne({ _id: id });
    if (!com) return res.status(404).send({ error: "Comment does not exist" });
    const isValidated = validator.updateValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });

    const updatedCom = await Comment.findByIdAndUpdate(id, req.body, {
      new: true
    });
    console.log(id)
    const up = await Form.findOneAndUpdate(
      { "comments._id":id}, //query
      { $pull: { comments: {commentFormId:id} } },
      { new:true }, //for multiple documents
      function (err, model) {
        if (err) {
          console.log(err);
          return res.send(err);
        }
      }
    );
console.log(up)
    const up2 = await Form.findByIdAndUpdate(up._id, //query
      { $addToSet: { comments: updatedCom } },
      { multi: true }, //for multiple documents
      function (err, model) {
        if (err) {
          console.log(err);
          return res.send(err);
        }
      }
    );
    console.log(up2)

    res.json({ msg: "Comment updated successfully", data: updatedCom });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const com = await Comment.findByIdAndDelete(id);
    res.json({ msg: "Comment successfully deleted" });
  } catch (error) {
    //Error will be handled later
  }
});
router.post("/deleteAll/", async (req, res) => {
  try {
    const deletee = await Comment.remove({});
    res.json({ msg: "Forms successfully deleted" });
  } catch (error) {
    //Error will be handled later
  }
});
module.exports = router;
