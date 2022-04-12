const mongoose = require('mongoose');
const colors = require("colors");

const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology: true,
            
        });

        console.log(`MongoDB COnnected: ${conn.connection.host}`.blue.bold);
    }
    catch(err){
        console.log("Error while connecting MOngoDB : " + err);
        process.exit();
    }

}

module.exports = connectDB;