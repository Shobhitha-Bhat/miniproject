const express = require('express')
const mongoose = require('mongoose')
const port = 8000

const app = express() //fetch express functionality
app.use(express.json())

//database connectivity
mongoose.connect('mongodb+srv://shobhitha_bhat:shobiacon2208@cluster0.uugyuwo.mongodb.net/employees')
.then(()=>{
    console.log("Database Connected")
})
.catch((error)=>{
    console.log(error)
})

//mongoose Schema
let userSchema = new mongoose.Schema({
    //fields
    //mongoose data-type
    name : { type : String },
    email : { type : String },
    password : { type : String },
    phone : { type : Number }
}, {timestamps : true}
)

//create Model for Schema
let userModel = new mongoose.model('User', userSchema )

//async-await : used while dealing with databases
let createUser = async function(req, res){
    let data = req.body; //fetching request from postman body
    let result = await userModel.create(data);
    res.status(200).json({msg : "User Created", data : result})
}

let getUser = async function(req, res){
    let data = await userModel.find()
    res.status(200).json({msg : "User Details", data : data})
}

app.post('/create', createUser);
app.get('/get-data', getUser);


//listen functionality
app.listen(port, ()=>{
    console.log(`Server running at ${port}`);
})