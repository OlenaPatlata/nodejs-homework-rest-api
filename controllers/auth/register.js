const bcrypt =require('bcryptjs');
const gravatar=require("gravatar");
const {nanoid} = require('nanoid');
const { createError, sendMail } = require('../../helpers');
const {User}=require('../../models/user');


const register = async(req, res)=>{
    const {email, password}=req.body;
    const user= await User.findOne({email});
    if(user){
    throw createError(409, "Email is use");
    }
    const mail={
        to:email,
        subject: 'sendgrid mail',
        html: '<a href="http://localhost:3000/auth">Veryfi</a>'
    }
    await sendMail(mail)

    const avatarURL=gravatar.url(email);
    const verificationToken=nanoid();
    const hashPassword = await bcrypt.hash(password, 10);
    const result=await User.create({...req.body, password:hashPassword, avatarURL, verificationToken});
    res.status(201).json({"user": {"email":result.email, "subscription": result.subscription
}});
}

module.exports=register;