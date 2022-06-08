const Contact=require('../../models/contact');


const getAll = async (req, res, next) => {
    try {
      const result=await Contact.find({"favorite": true});
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

  module.exports=getAll;