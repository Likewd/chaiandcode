import dotenv  from "dotenv"

// import express from "express";
import contactDB from "./db/index.js";
import app from "./app.js";
// const app = express()
    
dotenv.config({
    path:'./env'
})

contactDB().then(() => {
    app.listen(process.env.PORT || 8000, () => {
    console.log(`server is running at port ${process.env.PORT}`)
})

 }).catch(error => {
    console.log(`Error in DataBase Connection failed ${process.env.PORT}`)
})
