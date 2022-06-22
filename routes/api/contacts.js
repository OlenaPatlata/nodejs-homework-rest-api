const express = require('express');
const router = express.Router();
const {contacts:ctrl}=require('../../controllers');
const {ctrlWrapper}=require('../../helpers');
const {authenticate,validation, isValidId}=require('../../middlewares');
const {schemas} = require('../../models/contact');

const multer = require('multer');
const path=require('path');
const fs=require('fs/promises');

const tempDir=path.join(__dirname, "../../", "temp");

const multerConfig=multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, tempDir);
    },
    filename: (req, file, cb)=>{
        cb(null, file.originalname);
    },
    limits: {

    }
})
const upload=multer({
    storage:multerConfig
})





router.get('/', authenticate, ctrlWrapper(ctrl.getAll));

router.get('/:contactId', authenticate, isValidId,  ctrlWrapper(ctrl.findOneById));

router.post('/', authenticate, upload.single("avatar"), async (req, res)=>{
    const contactsDir=path.join(__dirname, "../../", "public", "avatars");
    const {filename}=req.file;
    const newDir=path.join(contactsDir, filename);
    await fs.rename(req.file.path, newDir)
} , validation(schemas.addContact), ctrlWrapper(ctrl.add));

router.delete('/:contactId', authenticate, isValidId,  ctrlWrapper(ctrl.remove));

router.put('/:contactId', authenticate, isValidId,  validation(schemas.addContact), ctrlWrapper(ctrl.findByIdAndUpdate));

router.patch('/:contactId/favorite', authenticate, isValidId, validation(schemas.updateFavorite), ctrlWrapper(ctrl.updateOneField));

module.exports = router;
