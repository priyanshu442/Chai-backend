import mongoose from "mongoose"
import { DB_NAME } from "./constants.js";
import express from "express"
import connectDB from "./db/index.js";

import dotenv from "dotenv";
dotenv.config();


const app = express()

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})



/*
;(  async()=>{
  try{

  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

  app.on("error",(error)=>{
    console.log("ERRR:" , error);
    throw error
  })

  app.listen(process.env.PORT,()=>{
    console.log(`App is listening `)
  })

  }catch(error){
    console.error("Error:",error)
    process.exit(1)
  }

})()
  */