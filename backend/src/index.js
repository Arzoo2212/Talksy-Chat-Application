import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js"
import { ConnectDB } from "./lib/db.js";
dotenv.config();
const app=express();
app.use(express.json());
let port=process.env.PORT || 5001;
app.use("/api/auth",authRoutes)
app.listen(port,()=>{
    console.log(`Server ${port} started`);
    ConnectDB(); 
});