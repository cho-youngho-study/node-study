import express from "express";

export const userRouter  = express.Router();

const userIndex = (req,res) =>{
    res.send('userIndex');
}
const userEdit = (req,res) =>{
    res.send('userEdit');
}
const userPassword = (req,res) =>{
    res.send('userPassword');
}

userRouter.get('/',userIndex);
userRouter.get('/edit',userEdit);
userRouter.get('/password',userPassword);