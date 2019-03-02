const express = require('express')
const Joi = require('joi')
const router = express.Router()
const external_entity = require('../../models/external_entity')

const external_entity = [
    new external_entity('external_entity1', 'address1', 24561987, 1513,"external_entity1@gmail.com"),
    new external_entity('external_entity2', 'address2', 24561988, 1866,"external_entity2@gmail.com"),
    new external_entity('external_entity3', 'address3', 24561989, 1867,"external_entity3@gmail.com")
];

router.get('/', (req, res) => res.json({ data: external_entity }))

router.post('/', (req, res) => {
	const name = req.body.name;
    const address = req.body.address;
    const telephone = req.body.telephone;
    const fax = req.body.fax;
    const email = req.body.email;

	if (!name) return res.status(400).send({ err: 'Name field is required' })
    if (typeof name !== 'string') return res.status(400).send({ err: 'Invalid value for name' })

    if (!address) return res.status(400).send({ err: 'address field is required' })
    if (typeof address !== 'string') return res.status(400).send({ err: 'Invalid value for address' })
    
	if (!telephone) return res.status(400).send({ err: 'telephone field is required' })
    if (typeof telephone !== 'number') return res.status(400).send({ err: 'Invalid value for telephone' })

    if (!fax) return res.status(400).send({ err: 'fax field is required' })
    if (typeof fax !== 'number') return res.status(400).send({ err: 'Invalid value for fax' })
    
    if (!email) return res.status(400).send({ err: 'email field is required' })
	if (typeof fax !== 'email') return res.status(400).send({ err: 'Invalid value for email' })

	const newExternal_entity = {
		name,
        address,
        telephone,
        fax,
        email,
        id: uuid.v4()
	}
	return res.json({ data: newExternal_entity });
})

router.put('/:id', (req,res) => {
    try {
        const id = req.params.id
        const external_entity = await external_entity.findOne({id})
        if(!external_entity) return res.status(404).send({error: 'external_entity does not exist'})
        const isValidated = validator.updateValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const updatedExternal_entity = await external_entity.updateOne(req.body)
        res.json({msg: 'external_entity updated successfully'})
       }
       catch(error) {
           console.log(error)
       }  
    })

router.delete('/:id', async (req,res) => {
    try {
        const id = req.params.id
        const deletedExternal_entity = await external_entity.findByIdAndRemove(id)
        res.json({msg:'external_entity was deleted successfully', data: deletedExternal_entity})
    }
    catch(error) {
        console.log(error)
    }  
    })

module.exports = router