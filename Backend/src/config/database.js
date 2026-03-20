const mongoose =  require("mongoose")

async function connectToDB(){
    await mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("connected to MongoDB")
    })
    .catch(err =>{
        console.log("error connected to MongoDB", err)
    }) 
}


module.exports = connectToDB