const router = require('express').Router();
const userModel = require('../models/usersmodel');


//post request
router.post('/signup',async(req,res)=>{
	try {
		const data = req.body;
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
		
		const username = req.body.Name
		const password = req.body.Password
		console.log(username)
		user =  await userModel.findOne({Name:username ,Password:password}).exec();
		
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