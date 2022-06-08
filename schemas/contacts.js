const Joi = require("joi");

const addContact=Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    favorite: Joi.boolean().required()
  })
  const updateFavorite=Joi.object({favorite:Joi.boolean().required()});

  module.exports={
    addContact,
    updateFavorite
  };