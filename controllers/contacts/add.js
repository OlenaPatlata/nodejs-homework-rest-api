const Contact=require('../../models/contact');
const {createError}=require("../../helpers/index");
const schemas=require('../../schemas/contacts');

const add = async (req, res, next) => {
    try {
      const {error}=schemas.addContact.validate(req.body);
      if(error){
        throw createError(400, error.message);
      }
      const result = await Contact.create(req.body);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
   };

   module.exports=add;