const express = require("express")
const router = express.Router()
const Joi = require("joi")

const Comment = require("../../models/Comment")
const Reviewer = require("../../models/Reviewer");
const Lawyer = require("../../models/Lawyer");

router.post("/", (req, res) => {
    const author_type = req.body.author_type
    const author = req.body.author
    const text = req.body.text
})

router.put ("/", async (req, res) => {
    const id = req.params.id ;
    const authorType = req.body.authorType;
    const author = req.body.author;
    const text = req.body.text;
    const postedOn = req.body.postedOn;
    const read = req.body.read;
    const schema = {
        id: Joi.required(),
        authorType: Joi.string().required(),
        author: Joi.string().required(),
        text: Joi.string().required(),
        postedOn: Joi.required(),
        read: Joi.required()
})
const result = Joi.validate(req.body, schema);

  if (result.error)
    return res.status(400).send({ error: result.error.details[0].message });

router.delete("/", (req, res) => {
    const id = req.params.id;
    const commentdel = Comments.find(commentdel => commentdel.id === id);
    const index = Comments.indexOf(commentdel);
    Comments.splice(index);
    res.send(Comments);
})

module.exports = router
