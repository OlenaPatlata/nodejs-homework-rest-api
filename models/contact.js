const {Schema, model} = require("mongoose");

const contactSchema=Schema({
    name: String,
    email: String,
    phone: Number,
    favorite: Boolean
});

const Contact = model("contact", contactSchema);

module.exports = Contact;

// {  "_id": {    "$oid": "6295cd23fc13b2e020da3a03"  },  "name": "Allen Raymond",  "email": "nulla.ante@vestibul.co.uk",  "phone": "(992) 914-3792",  "favorite": false}