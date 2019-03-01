const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();

const Investor = require('../../models/Investor');

const investors = [
        new Investor('Naguib', 'Ramy', 'Sawiras', 'Male // Drop Down', 'Egyptian // Drop Down', 'Person // Drop Down', 'National ID // Drop Down', '12345678901234', '1960-02-23', '24 Magnolia St., Compound Le Reve, 6th Of October, Giza, Egypt', '01234567890', '+20-2-1234567', 'nagiub.sawiras@mymail.com', 1000000, 'Euro // Drop Down'),
        new Investor('Maged', 'Gamal', 'Rashad', 'Male // Drop Down', 'Jordanian // Drop Down', 'Person // Drop Down', 'Passport // Drop Down', 'A823D09H', '1970-08-12', '324 Gadallah St., Compound Reyan, Abdoun, Amman, Jordan', '+962 79 999 9999', '+962 6 466 3322', 'maged.rashad@mymail.com', 5000000, 'Dollar // Drop Down')
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
        gender: Joi.required(),
        nationality: Joi.required(),
        investorType: Joi.required(), //ask lina cuz is in SSC but not SPC
        typeOfID: Joi.string().min(3),
        IDNumber: Joi.string().min(3).required(),
        dateOfBirth: Joi.date().required(),
        address: Joi.string().min(3),
        phoneNumber: Joi.string().min(3),
        faxNumber: Joi.string().min(3),
        email: Joi.string().min(3),
        capitalCurrency: Joi.string().min(3),
        capital: Joi.number()

      };

    const result = Joi.validate(req.body, schema);

    if (result.error)
       return res.status(400).send({ error: result.error.details[0].message });  

});