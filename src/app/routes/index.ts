import express from "express";
import routes from "../constants/routes.constants";

const globalRoutes=express.Router()
routes.forEach((el)=>{
    globalRoutes.use(el.path,el.route) 
}) 


export default globalRoutes