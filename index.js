const express=require("express");
const app=express();
const bodyParser=require('body-parser')
const MongoClient=require('mongodb').MongoClient;
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
MongoClient.connect('mongodb://satish2016:tbujti@ds061076.mlab.com:61076/learning_database',(err,database) => {
	if(err)
		return console.log('satish dude');
	db=database;
	app.listen(3000,function(){
	console.log("listening on 3000")
})
})
app.get('/',(req,res) => {
	res.render('testingfile.ejs');
})
app.get('/registered',(req,res)=>{
	res.render('registerd.ejs');
})
app.post('/register',(req,res) => {
	if(db.collection('users_registration_data').find({"name":{$exists:req.body.name}})==false)
	{
	db.collection('users_registration_data').save(req.body,(err,result) => {
		if(err) return console.log(err);
		res.redirect('/registered');
	})
	}
	else
	{
		console.log("user already registered");
		res.redirect('/');
	}
	})