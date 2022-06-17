const bcrypt =require('bcryptjs');
const { createError } = require('../../helpers');
const {User}=require('../../models/user');

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
    const token="asdf.asdrf.asgdf";
    res.json({
        token,
        user:{email: user.email,
        subscription: user.subscription }
    });
}

module.exports=login