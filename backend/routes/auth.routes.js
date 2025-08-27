import {Router} from "express"
import { User } from "../models/userModel.js"

const authRouter = Router();

authRouter.post("/signup",async (req , res ) =>{
    try{
        const {name, email, password} = req.body;
        if(!name || !email || !password){
            return res.status(400).json({message: "All fields are required!"})
        }

        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(401).json({message:"User already exist!"})
        }

        const user = await User.create({name, email, password})

        res.status(201).json({message:`Signup successful. ${user}`})
    }catch(error){
        console.log("Signup error : ",error.message)
        res.status(500).json({message:"Server error!"})
    }
});


authRouter.post("/login", async (req, res) => {
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(401).json({message:"Email & password required!"})
        }
        const user = await User.findOne({email});
        if (!user || user.password !== password){
            return res.status(401).json({message:"Invalid credentials!"})
        }
        console.log("login successful.")
        res.status(200).json(user);
    }catch(error){
        console.log("Login failed!", error.message)
        return res.status(500).json({message:"Server Error!"})
    }
});

export default authRouter;