const express = require("express")
const router = express.Router()

const Investor = require('../../models/Investor')
const validator = require("../../validations/investorValidations")

// GET: select * from investors
router.get('/get', async (req,res) => {
  const investors = await Investor.find()
  res.json({data: investors})
})

// GET BY ID: select * from investors where id = _
router.get("/getbyID/:id", (req, res) => {
  const id = req.params.id;
  //const investor = await Investor.findById(id)
  const investor = await Investor.findOne({id})
  if(!investor) return res.status(404).send({error: 'Investor does not exist'})
  res.json({ data: investor })

})

// CREATE: insert into investors
router.post("/create", (req, res) => {
  try {
    const isValidated = validator.createValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const newInvestor = await Investor.create(req.body)
    res.json({msg:'Investor was created successfully', data: newInvestor})
   }
   catch(error) {
       // We will be handling the error later
       console.log(error)
   }  
})

// DELETE: delete * from investors where id = _
router.delete("/delete/:id", (req, res) => {
  try {
    const id = req.params.id
    const deletedInvestor = await Investor.findByIdAndRemove(id)
    res.json({msg:'Investor was deleted successfully', data: deletedInvestor})
   }
   catch(error) {
       // We will be handling the error later
       console.log(error)
   }  
})

// UPDATE: update investors set _ = _ ...etc 
router.put("/update/:id", (req, res) => {
  try {
    const id = req.params.id
    const investor = await Investor.findOne({id})
    if(!investor) return res.status(404).send({error: 'Investor does not exist'})
    const isValidated = validator.updateValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const updatedInvestor = await Investor.updateOne(req.body)
    res.json({msg: 'Investor updated successfully'})
   }
   catch(error) {
       // We will be handling the error later
       console.log(error)
   }  
})

module.exports = router;
