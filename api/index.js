import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoute from './Routes/user.route.js';
import authRoute from './Routes/auth.route.js';
dotenv.config()
mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected Database");
}).catch((err) => {
    console.log(err);
})
const app = express()
app.use(express.json());
app.listen(3000, () => {

    console.log("Server is listening on port 3000");
})

app.use('/',userRoute);
app.use('/api/auth',authRoute);


app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internet Server Error"
    return res.status(statusCode).json({
        sucesss:false,
        message,
        statusCode
        
    })
})
