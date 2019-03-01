const express = require("express")
const router = express.Router()
const Joi = require("joi")


router.post("/", (req, res) => {
    const RoL = req.body.RoL
    const author = req.body.author
    const text = req.body.text
    const read = req.body.read


router.delete("/", (req, res) => {
    const id = req.params.id;
    const comments = comments.find(comments => comments.id === id);
    const index = comments.indexOf(comments);
    comments.splice(index);
    res.send(comments);
      })
      module.exports = router;
