import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";


const contactDB = async() => {
    try {
        
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
        console.log(`\n MongoDB connected !!  DB HOST ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("Error in DataBase connection",error)
        process.exit(1)
    }
}


export default contactDB