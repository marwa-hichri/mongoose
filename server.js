const express = require('express');
//const person = require('./models/personModels');
const connectdb = require('./config/db');
const port = process.env.port || 5050;
const app =express();

const {createPersone,createPersonnes} = require("./controllers/personControllers");
const Person = require('./models/personModels');

connectdb()
createPersone()
createPersonnes()
//find Model
const findPerson = async (person)=>{
    try{
       const result= Person.find({name:person});
        console.log(result);
    
    }
    catch(err){
        console.log(err.message);
    }
};
findPerson("rawdha rawdha");
 
//use Model.findOne() to Return a Single Matching Document from Your Database
const findOnePerson = async (food) => {
    try {
      const result = await Person.findOne({ favoriteFoods: food });
      console.log(result);
    } catch (err) {
      console.log(err.message);
    }
  };
  findOnePerson("gateau");
  //Use Model.findById() to search your Database By _id
  const findIdPerson = async (personId) => {
    try {
      const result = await Person.findById({ _id: personId});
      console.log(result);
    } catch (err) {
      console.log(err.message);
    }
  };
  findIdPerson("6461508cea0d271ba61595be");
  //Perform Classic Updates by running FIN,EDit,then Save

  const updateFood = async (id, food) => {
    try {
      const result = await Person.findById({ _id: id });
      result.updateOne(food);
      await result.save();
      console.log(result);
    } catch (err) {
      console.error(err.message);
    }
  };
  updateFood("646150fa45cd11da22259f39", "hamburger");

//Perform New Updates on a Document Using model.findOneAndUpdate()

const updatAge = async (name, age) => {
    try {
      const result = await Person.findOneAndUpdate(
        { name },
        {age},
        {new:true}
        );
      ;
      await result.save();
      console.log(result);
    } catch (err) {
      console.error(err.message);
    }
  };
  updatAge("mary mary", "8");

//Delete One Document Using model.findByIdAndRemove


const deletePerson = async (id) => {
    try {
      const result = await Person.findByIdAndRemove({ _id: id });
      console.log(result);
    } catch (err) {
      console.error(err.message);
    }
  };
  deletePerson("646156fc23cb1187cdd891d0");

//MongoDB and Mongoose - Delete Many Documents with model.remove()


 //MongoDB and Mongoose - Delete Many Documents with model.remove()
  
 Person.deleteMany({ name: "Marwa" }).then((data) => {
    console.log(data.deletedCount);
  });
//Chain Search Query Helpers to Narrow Search Results

var queryChain = function(done) {
    var foodToSearch = "burrito";
    Person.find({favoriteFoods:foodToSearch}).sort({name : "desc"}).limit(2).select("-age").exec((err, data) => {
       if(err)
         done(err);
      done(null, data);
    })
  };
  queryChain();





app.listen(port,()=>{console.log("port is running",port)})
;