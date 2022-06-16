const bcrypt =require('bcryptjs');


const { createError } = require('../../helpers');
const {User}=require('../../models/user');


const register =async(req, res)=>{
    console.log(req.body);
    const {email, password}=req.body;
    console.log(email);
    const user= await User.findOne({email});
    if(user){
    throw createError(409, "Email is use");
    }
    const hashPassword=await bcrypt.hash(password, 10);
    const result=await User.create({...req.body, password:hashPassword});
    res.status(201).json(result);
}

module.exports=register;