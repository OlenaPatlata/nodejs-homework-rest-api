const Contact=require('../../models/contact');
const {createError}=require("../../helpers/index");
const schemas=require('../../schemas/contacts');

const findByIdAndUpdate=async (req, res, next) => {
    try {
      const {error}=schemas.addContact.validate(req.body);
        if(error){
          throw createError(400, error.message);
        };
      const {contactId}=req.params;
        const result=await Contact.findByIdAndUpdate(contactId, req.body);
        if(!result){
          throw createError(404, `Contact with id: ${contactId} didn't find`);
        }
        res.json(result);
    } catch (error) {
      next(error);
    }
    };

    module.exports=findByIdAndUpdate;