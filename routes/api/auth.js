const express = require('express');
const router = express.Router();
const {users:ctrl}=require('../../controllers');
const {ctrlWrapper}=require('../../helpers');
const {authenticate, validation, upload} = require('../../middlewares');
const {schemas} = require('../../models/user');

// Регистрация
router.post('/register', validation(schemas.registerUser), ctrlWrapper(ctrl.register));

// Аутентификация (логин)
router.post('/login', validation(schemas.loginUser), ctrlWrapper(ctrl.login));

// Получение текущего пользователя
router.get('/current', authenticate, ctrlWrapper(ctrl.getCurrent));

// logout
router.get('/logout', authenticate, ctrlWrapper(ctrl.logout));

// Обновление подписки (subscription)
router.patch('/update', authenticate, validation(schemas.updateSubUser), ctrlWrapper(ctrl.updateSubscription));

// Замена аватарки
router.patch("/avatars", authenticate, upload.single("avatar"), ctrlWrapper(ctrl.updateAvatar));

module.exports=router;