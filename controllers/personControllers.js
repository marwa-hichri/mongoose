//create and save a Record of a Model:
const Person=require("../models/personModels")
const createPersone = async() =>{
    const personne = await Person.create({
        name:"marwa",
        age:"28",
        favoriteFoods:["pizza","lazania","pancake"]
    });
    try{
        const result=await personne.save();
        console.log(result);
    }
    catch(err){
        console.log(err.message)
    }

};

// Create Many Records with model.create()
const createPersonnes = async (personnes) => {
    try {
      const result = await Person.create(personnes);
      console.log(result);
    } catch (err) {
      console.log(err.message);
    }
  };
  createPersonnes([
    {
      name: "ines elkefi",
      age: 27,
      favoriteFoods: ["couscous", "walnut bubble", "gateau"],
    },
    {
      name: "rawdha rawdha",
      age: 27,
      favoriteFoods: ["souflé", "gateau"],
    },
    {
      name: "mary mary",
      age: 27,
      favoriteFoods: ["walnut bubble", "gateau"],
    },
  ]);


module.exports={createPersone,createPersonnes};
