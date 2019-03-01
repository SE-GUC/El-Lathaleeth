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


router.delete("/", (req, res) => {
    const id = req.params.id;
    const commentdel = Comment.find(Comment => Comment.id === id);
    const index = Comment.indexOf(commentdel);
    Comment.splice(index);
    res.send(Comment);
})

module.exports=router
