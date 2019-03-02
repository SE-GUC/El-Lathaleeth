const express = require("express")
const router = express.Router()
const Joi = require("joi")

const Comment = require("../../models/Comment")
const Reviewer = require("../../models/Reviewer");
const Lawyer = require("../../models/Lawyer");

const comment = [
    new Comment(
        "Reviewer",
        "ay 7aga",
        "comment text",
        "2019-1-1",
        "read"
    ),
    new Comment(
        "Lawyer",
        "ay 7aga2",
        "comment text2",
        "2019-3-15",
        "not read"
    )
  ];

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
}

const result = Joi.validate(req.body, schema);

if (result.error)
return res.status(400).send({ error: result.error.details[0].message });

const newComment = {
    id: uuid.v4(),
    authorType,
    author,
    text,
    postedOn,
    read
};
comment.push(new Entity_Emp(newComment));
return res.json({ data: newComment });
});

router.get('/', (req, res) => res.json({ data: comments }));

router.delete("/", (req, res) => {
    const id = req.params.id;
    const commentdel = comment.find(Comment => Comment.id === id);
    const index = comment.indexOf(commentdel);
    comment.splice(index);
    res.send(comment);
})

module.exports=router
