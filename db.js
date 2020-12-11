import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

const handleOpen = () =>{
    console.log("connect DB");
}

const handleError = () =>{
    console.log("DB Error");
}

db.once("open", handleOpen);
db.on("error",handleError);