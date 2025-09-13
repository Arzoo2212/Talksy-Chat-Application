import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js"
import { ConnectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import messageRoutes from "./routes/message.route.js";
dotenv.config();
const app=express();
app.use(express.json());
app.use(cookieParser());
let port=process.env.PORT || 5001;
app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes);
app.listen(port,()=>{
    console.log(`Server ${port} started`);
    ConnectDB(); 
});