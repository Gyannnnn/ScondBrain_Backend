import express from "express"
import mongoose from "mongoose"
import jwt from 'jsonwebtoken'
import { UserModel } from "./db";

const app = express();




app.get("/",(req,res)=>{
    res.json({
        message:"Hello World"
    })
});

app.post("/api/v1/signup",(req,res)=>{
    const {username , password} = req.body
    UserModel.create({
        username,
        password
    })
})


app.listen(3000,()=>{
    console.log("Server Is Running at http://localhost:3000");
})