const express = require('express');
const router = express.Router();
const {contacts:ctrl}=require('../../controllers');
const {ctrlWrapper}=require('../../helpers');
const {validation}=require('../../middlewares');
const schemas = require('../../schemas/contacts');

router.get('/', ctrlWrapper(ctrl.getAll));

router.get('/:contactId', ctrlWrapper(ctrl.findOneById));

router.post('/', validation(schemas.addContact), ctrlWrapper(ctrl.add));

router.delete('/:contactId', ctrlWrapper(ctrl.remove));

router.put('/:contactId', validation(schemas.addContact), ctrlWrapper(ctrl.findByIdAndUpdate));

router.patch('/:contactId', validation(schemas.updateFavorite), ctrlWrapper(ctrl.updateOneField));

module.exports = router;
