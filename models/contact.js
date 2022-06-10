const {Schema, model} = require("mongoose");

const groups=['work', 'friend', 'family', 'other']

const contactSchema=Schema({
    name: {type:String, required: [true, 'Set name for contact']},
    email: {type:String, required:true},
    phone: {type:String, required:true},
    groups: {type:String, enum:groups, required:true},
    favorite: {type:Boolean, default:false}
}, {versionKey:false, timestamps:true});

const Contact = model("contact", contactSchema);

module.exports = Contact;
