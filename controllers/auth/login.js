const bcrypt =require('bcryptjs');
const { createError } = require('../../helpers');
const {User}=require('../../models/user');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const {SECRET_KEY}=process.env;


const login=async (req, res)=>{
    const {email, password}=req.body;
    const user = await User.findOne({email});
    if(!user){
        throw createError(401, "Wrong email");
    };
    const compareResult = await bcrypt.compare(password, user.password);
    if(!compareResult){
        throw createError(401, "Wrong password")
    };
    const payload={id:user._id}
    const token=jwt.sign(payload, SECRET_KEY, {expiresIn: '1h'});
    res.json({
        token,
        user:{email: user.email,
                subscription: user.subscription }
    });
}

module.exports=login