import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs'
export const signup = async (req,res,next) => {
   const { username , email, password } = req.body;
   const hashPassword = bcryptjs.hashSync(password,4);
  try{
      const newUser = new User({
          username,
          email,
          password:hashPassword
      })
     await newUser.save()
     res.status(201).json({message:"User Created Successfully"})
  }catch(error){
           next(error)
  }
}