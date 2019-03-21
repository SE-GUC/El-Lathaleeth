const express = require("express");
const router = express.Router();
const Joi = require("joi");

const Comment = require("../../models/Comment");
const validator = require("../../validations/commentValidation");

const comments = [
  new Comment("Reviewer", "ay 7aga", "comment text", "2019-1-1", "read"),
  new Comment("Lawyer", "ay 7aga2", "comment text2", "2019-3-15", "not read")
];

router.post("/", async (req, res) => {
  const author_type = req.body.author_type;
  const author = req.body.author;
  const text = req.body.text;
  const read_at = req.body.read_at;

  const isValidated = validator.createValidation(req.body);
  if (isValidated.error)
    return res
      .status(400)
      .send({ error: isValidated.error.details[0].message });

  const newComment = new Comment(author_type, author, text, read_at);
  comments.push(newComment);
  return res.json({ data: newComment });
});

router.get("/", (req, res) => res.json({ data: comments }));
router.get("/byID/:id", (req, res) => {
  const id = req.params.id;
  const com = comments.find(com => com.id === id);
  res.json({ data: com })

});



router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  const com = comments.find(com => com.id === id);
  const index = comments.indexOf(com);
  if (index >= 0) {
    comments.splice(index, 1);
  }
  res.send(comments);
});

router.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  const author_type = req.body.author_type;
  const author = req.body.author;
  const text = req.body.text;
  const read_at = req.body.read_at;

  const isValidated = validator.createValidation(req.body);
  if (isValidated.error)
    return res
      .status(400)
      .send({ error: isValidated.error.details[0].message });
  const com = comments.find(com => com.id === id);
  com["author_type"] = author_type;
  com["author"] = author;
  com["text"] = text;
  com["read_at"] = read_at;

  res.send(comments);
  return res.json({ data: comments });
});

module.exports = router;
