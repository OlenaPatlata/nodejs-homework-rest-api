const express = require('express');
const router = express.Router();
const {contacts:ctrl}=require('../../controllers/index');

router.get('/', ctrl.getAll);

router.get('/:contactId', ctrl.findOneById);

router.post('/', ctrl.add);

router.delete('/:contactId', ctrl.remove);

router.put('/:contactId', ctrl.findByIdAndUpdate);

router.patch('/:contactId', ctrl.updateOneField);

module.exports = router;
