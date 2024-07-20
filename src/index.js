import dotenv  from "dotenv"

// import express from "express";
import contactDB from "./db/index.js";
// const app = express()
    
dotenv.config({
    path:'./env'
})

contactDB()
