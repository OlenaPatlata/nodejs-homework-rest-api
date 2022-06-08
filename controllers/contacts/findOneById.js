const Contact=require('../../models/contact');
const {createError}=require("../../helpers/index");

const findOneById= async (req, res, next) => {
    try {
      const {contactId}=req.params;
      const result = await Contact.findById(contactId);
      if(!result){
        throw createError(404, `Contact with id: ${contactId} didn't find`);
      }
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
  module.exports=findOneById;