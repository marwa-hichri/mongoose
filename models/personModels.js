const mongoose  = require("mongoose");
const {Schema,model} =mongoose
const personSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
    },
    favoriteFood:{
        type:[String],
    },
});
const Person= model("person", personSchema);



module.exports = Person;