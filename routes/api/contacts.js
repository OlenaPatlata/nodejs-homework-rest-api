const express = require('express');
const Joi = require("joi");
const router = express.Router();

const Contact=require('../../models/contact.js');
const {createError}=require('../../helpers/index');

const joiSchema=Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  phone: Joi.number().required(),
  favorite: Joi.boolean()
})

router.get('/', async (req, res, next) => {
  try {
    const result=await Contact.find();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
})

router.get('/:contactId', async (req, res, next) => {
  try {
    const {contactId}=req.params;
    const result = await Contact.findById(contactId);
    if(!result){
      throw createError(404, `Contact with id: ${contactId} didn't find`);
    }
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
})

router.post('/', async (req, res, next) => {
  try {
    const {error}=joiSchema.validate(req.body);
    if(error){
      throw createError(400, error.message);
    }
    const result = await Contact.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
 })

router.delete('/:contactId', async (req, res, next) => {
  try {
    const {contactId}=req.params;
    const result=await Contact.findByIdAndDelete(contactId);
    if(!result){
      throw createError(404, `Contact with id: ${contactId} didn't find`);
   }
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
})

router.put('/:contactId', async (req, res, next) => {
try {
  const {error}=joiSchema.validate(req.body);
    if(error){
      throw createError(400, error.message);
    };
  const {contactId}=req.params;
    const result=await Contact.findByIdAndUpdate(contactId, req.body);
    if(!result){
      throw createError(404, `Contact with id: ${contactId} didn't find`);
    }
    res.json(result);
} catch (error) {
  next(error);
}
});

module.exports = router;
