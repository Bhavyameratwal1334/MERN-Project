import { response } from "express";
import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";7

export const signup = async (req , res, next) => {
    const { username,email,password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10);
    const newUser = new User({username,email,password: hashedPassword});
    try{
        await newUser.save();
        res.status(201).json("User Created Succesfully");
    }catch (error){
        next(error);
    }
};


