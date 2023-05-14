
const mongoose = require('mongoose');
//require("dotenv").config({path:"../.env"})
const connectdb = async ()=>{
    try{
        await mongoose.connect("mongodb+srv://Hichri-marwa:tahakhalil123@persons.raskzkt.mongodb.net/Restaurant")
        console.log("database connected")
    }
    catch(error) {
        error

    }

}
module.exports =connectdb
