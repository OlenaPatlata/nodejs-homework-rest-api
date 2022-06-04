const express = require('express');

const router = express.Router();
const {nanoid}=require('nanoid');

const contacts=require('../../models/contacts.js');
const {createError}=require('../../helpers/index')

router.get('/', async (req, res) => {
  try {
    const result=await contacts.listContacts();
    res.json(result);
  } catch (error) {
    res.status(500).json({message:"Server error"})
  }
})

router.get('/:contactId', async (req, res) => {
  try {
    const {contactId}=req.params;
    console.log(contactId);
    const result = await contacts.getContactById(contactId);
    if(!result){
      throw createError(404, `Contact with id: ${contactId} didn't find`);
   }
    res.json(result);
  } catch (error) {
    const {status=500, message="Server error"}=error;
    res.status(status).json({message})
  }
})

router.post('/', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router
