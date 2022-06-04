const express = require('express');

const router = express.Router();


const contacts=require('../../models/contacts.js');
const {createError}=require('../../helpers/index');

router.get('/', async (req, res, next) => {
  try {
    const result=await contacts.listContacts();
    res.json(result);
  } catch (error) {
    next(error);
  }
})

router.get('/:contactId', async (req, res, next) => {
  try {
    const {contactId}=req.params;
    const result = await contacts.getContactById(contactId);
    if(!result){
      throw createError(404, `Contact with id: ${contactId} didn't find`);
   }
    res.json(result);
  } catch (error) {
    next(error);
  }
})

router.post('/', async (req, res, next) => {
  try {
    const result = await contacts.addContact(req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
 })

router.delete('/:contactId', async (req, res, next) => {
  try {
    const {contactId}=req.params;
    const result=await contacts.removeContact(contactId);
    res.json(result);
  } catch (error) {
    next(error)
  }
})

router.put('/:contactId', async (req, res, next) => {
try {
  const {contactId}=req.params;
    const result=await contacts.updateContact(contactId);
    res.json(result);
} catch (error) {
  next(error);
}
})

module.exports = router;
