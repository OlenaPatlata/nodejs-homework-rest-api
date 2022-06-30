const sgMail=require('@sendgrid/mail');
require('dotenv').config();
const {SENDGRID_API_KEY_HW06}=process.env;

sgMail.setApiKey(SENDGRID_API_KEY_HW06);

const sendMail = async (data)=>{
    try {
        const mail={...data, from: 'elena.pat@ukr.net'};
        await sgMail.send(mail);
        return true;
    } catch (error) {
        throw error;
    }
}

module.exports=sendMail