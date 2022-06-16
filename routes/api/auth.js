const express = require('express');
const router =express.Router();
const {users:ctrl}=require('../../controllers');
const {ctrlWrapper}=require('../../helpers');
const {validation}=require('../../middlewares');
const {schemas}=require('../../models/user');

// Регистрация
router.post('/register', validation(schemas.registerUser), ctrlWrapper(ctrl.register));

// Аутентификация ()логин)
router.post('/login', validation(schemas.loginUser), ctrlWrapper(ctrl.login) )
// Получение текущего пользователя


module.exports=router;