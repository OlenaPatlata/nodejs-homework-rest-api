const {Schema, model} = require("mongoose");
const Joi = require("joi");
const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const registerUser= Joi.object({
    name:Joi.string().required(),
    email: Joi.string().required().pattern(emailRegexp),
    password: Joi.string().min(6).required()
});

const loginUser= Joi.object({
    email: Joi.string().required().pattern(emailRegexp),
    password: Joi.string().min(6).required()
});

const schemas={
    registerUser,
    loginUser
};

const userShema=Schema({
    name: {type:String, required: [true, 'Set name for user'], uniqu: true},
    email: {type:String, required:true, uniqu: true, match:emailRegexp},
    password: {type:String, required:true}
}, {versionKey:false, timestamps:true});

const User=model('user', userShema);

module.exports={
    User, 
    schemas
};