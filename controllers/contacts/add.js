const {Contact}=require('../../models/contact');

const add = async (req, res) => {
        const {_id:owner}=req.user;
        const result = await Contact.create({...req.body, owner});
        res.status(201).json({name:result.name, phone: result.phone, email: result.email});
};

module.exports=add;