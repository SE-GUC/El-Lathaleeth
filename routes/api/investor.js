const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();

const Investor = require('../../models/Investor');

const investors = [
        new Investor('Naguib', 'Ramy', 'Sawiras', 'Male // Drop Down', 'Egyptian // Drop Down', 'Individual // Drop Down', 'National ID // Drop Down', '12345678901234', '1960-02-23', '24 Magnolia St., Compound Le Reve, 6th Of October, Giza, Egypt', '01234567890', '+20-2-1234567', 'nagiub.sawiras@mymail.com', 1000000, 'Euro // Drop Down'),
        new Investor('Maged', 'Gamal', 'Rashad', 'Male // Drop Down', 'Jordanian // Drop Down', 'Individual // Drop Down', 'Passport // Drop Down', 'A823D09H', '1970-08-12', '324 Gadallah St., Compound Reyan, Abdoun, Amman, Jordan', '+962 79 999 9999', '+962 6 466 3322', 'maged.rashad@mymail.com', 5000000, 'Dollar // Drop Down')
];

router.get('/', (req, res) => res.json({ data: investors }));

//router.post('/joi', (req, res) => {
router.post('/', (req, res) => {

    const firstName = req.body.firstName;
    const middleName = req.body.middleName;
    const lastName = req.body.lastName;
    const gender = req.body.gender;
    const nationality= req.body.nationality;
    const investorType= req.body.investorType;  
    const typeOfID= req.body.typeOfID;
    const IDNumber= req.body.IDNumber;
    const dateOfBirth= req.body.dateOfBirth;
    const address= req.body.address;
    const phoneNumber= req.body.phoneNumber;
    const faxNumber= req.body.faxNumber;
    const email= req.body.email;
    const capital= req.body.capital;
    const capitalCurrency= req.body.capitalCurrency;

    const schema = {
        firstName: Joi.string().min(3).required(),
        middleName: Joi.string().min(3),
        lastName: Joi.string().min(3).required(),
        gender: Joi.any().valid(['male', 'female']).required(), // Drop Down
        nationality: Joi.string().required(), // Drop Down
        investorType: Joi.required(), // Drop Down
        typeOfID: Joi.any().valid(['passport', 'id']).required(),// Drop Down
        IDNumber: Joi.string().min(8).required(),
        dateOfBirth: Joi.date().required(),
        address: Joi.string().required(),
        phoneNumber: Joi.string().length(11),
        faxNumber: Joi.string(),
        email: Joi.alphanumeric(),
        capital: Joi.number().required(),
        capitalCurrency: Joi.string().required() // Drop Down
        
      };

    const result = Joi.validate(req.body, schema);

    if (result.error)
       return res.status(400).send({ error: result.error.details[0].message });  

    const newInvestor = {
        firstName, middleName, lastName, gender, nationality, investorType, typeOfID, IDNumber, dateOfBirth, address, phoneNumber, faxNumber, email, capital, capitalCurrency
    };   

    investors.push(new Investor(newInvestor));
    return res.json({ data: newInvestor });

});

module.exports = router;