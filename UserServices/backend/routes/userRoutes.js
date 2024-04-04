const router = require('express').Router();
const userModel = require('../models/usersmodel');


//post request
router.post('/signup',async(req,res)=>{
	try {
		const data = req.body;
    console.log("backend",data);
		const newuser = new userModel(data);
    
		await newuser.save().then(()=>
		{
			var redir = { redirect: "/" };
        return res.json(redir);
		})

 	}catch(error){
		var redir = { redirect: '/login'};
        return res.json(redir);
	}
})

router.post('/login',async(req,res)=>{
		
		const email = req.body.mailid
		const Password = req.body.password
		console.log(email)
		user =  await userModel.findOne({mailid:email ,password:Password}).exec();
		
		if(user!=null )
		{
			var redir = { redirect: "/" };
        return res.json(redir);
		}
		else 
		{
        var redir = { redirect: '/login'};
        return res.json(redir);
		
		}})



module.exports = router ;