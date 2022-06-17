const express=require('express');

const router =express.Router();




router.get('/current', async(req, res, next)=>{
    try {
        console.log(req.headers.authorization);
    } catch (error) {
        console.log(error);
    }
});

router.get('/logout', async(req, res, next)=>{
    try {
       console.log(111);
    } catch (error) {
        console.log(error);
    }
});

module.exports=router;