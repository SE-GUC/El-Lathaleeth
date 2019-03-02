const express = require("express");
const router = express.Router();
const Joi = require("joi");

const Comment = require("../../models/Comment");

const comments = [
  new Comment("Reviewer", "ay 7aga", "comment text", "2019-1-1", "read"),
  new Comment("Lawyer", "ay 7aga2", "comment text2", "2019-3-15", "not read")
];

router.post("/", async (req, res) => {
  const authorType = req.body.authorType;
  const author = req.body.author;
  const text = req.body.text;
  const read_at = req.body.read_at;
  const schema = {
    authorType: Joi.string().required(),
    author: Joi.string().required(),
    text: Joi.string().required(),
    read_at: Joi.optional()
  };

  const result = Joi.validate(req.body, schema);

  if (result.error)
    return res.status(400).send({ error: result.error.details[0].message });

  const newComment = new Comment(authorType, author, text, read_at);
  comments.push(newComment);
  return res.json({ data: newComment });
});

router.get("/", (req, res) => res.json({ data: comments }));

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
  const authorType = req.body.authorType;
  const author = req.body.author;
  const text = req.body.text;
  const read_at = req.body.read_at;
  const schema = {
    authorType: Joi.string().required(),
    author: Joi.string().required(),
    text: Joi.string().required(),
    read_at: Joi.optional()
  };

  const result = Joi.validate(req.body, schema);

  if (result.error)
    return res.status(400).send({ error: result.error.details[0].message });

  const newComment = new Comment(authorType, author, text, read_at);
  const com = comments.find(com => com.id === id);
  const index = comments.indexOf(com);
  if (index >= 0) {
    comments.splice(index, 1, newComment);
  }
  res.send(comments);
  return res.json({ data: comments });
});

module.exports = router;
