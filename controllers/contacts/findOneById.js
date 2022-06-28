const {Contact}=require('../../models/contact');
const {createError}=require("../../helpers/index");

const findOneById= async (req, res) => {
      const {contactId}=req.params;
      const {_id:owner}=req.user;
      const result = await Contact.findById(contactId, "-createdAt -updatedAt", {owner}).populate("owner", "email name");;
      // console.log(result.owner);
      // console.log(req.user._id);
      // console.log(result.owner===req.user._id);
      if(!result ){
        throw createError(404, `Contact with id: ${contactId} didn't find`);
      }
      res.status(200).json(result);
};

module.exports=findOneById;