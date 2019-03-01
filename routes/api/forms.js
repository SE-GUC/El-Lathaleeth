const express = require('express');
const Joi = require('joi');
const router = express.Router();
const uuid = require('uuid');

const Form = require('../../models/Form');
const Director = require('../../models/BoardOfDirector');
const Address = require('../../models/Address');

const forms = [
    new Form("Laws drop down menu",
        "Legal form of company drop down",
        "SSC",
        "لينا للانتاج",
        "Lina Productions",
        new Address("Apart2", "Sheikh Zayed", "Giza"),
        "012223533443",
        "23344",
        "I am investor deats",
        "Euro",
        500000,
        [new Director("Mohamed", "individual", "male", "Egypt", "passport", "A2938920", new Date("1970-03-25"), "address", "manager"),
        new Director("Ali", "individual", "male", "Egypt", "passport", "A2938920", new Date("1970-03-25"), "address", "manager2")]),
    new Form("Laws drop down menu",
        "Legal form of company drop down",
        "SPC",
        "لينا للانتاج",
        "Lina Productions",
        new Address("Apart2", "Sheikh Zayed", "Giza"),
        "012223533443",
        "23344",
        "I am investor deats",
        "Euro",
        500000)

];

router.get('/', (req, res) => res.json({ data: forms }));

router.delete('/delete/:id', (req, res) => 
{
    const id = req.params.id
    const form = forms.find(form => form.id === id)
    const index = forms.indexOf(form)
    forms.splice(index,1)
    res.send(forms)
   
})

router.post('/', (req, res) => {
    const formType = req.body.formType
    const location = new Address(req.body.location)
    const arabicName = req.body.arabicName
    const englishName = req.body.englishName
    const phone = req.body.phone
    const fax = req.body.fax
    const investor = req.body.investor
    const boardOfDirectors = req.body.boardOfDirectors
    const capitalCurr = req.body.capitalCurr
    const capitalVal = req.body.capitalVal
    const law = req.body.law
    const legalForm = req.body.legalForm
    const bitIL = req.body.bitIL



    //const result = Joi.validate(req.body, schema);
    //if (result.error) return res.status(400).send({ error: result.error.details[0].message });

    const newForm = {
        law,
        legalForm,
        formType,
        arabicName,
        englishName,
        location,
        phone,
        fax,
        investor,
        capitalCurr,
        capitalVal, 
        bitIL,
        boardOfDirectors,
        id: uuid.v4(),
    };
    forms.push(new Form(newForm))
    return res.json({ data: newForm });
});

module.exports = router