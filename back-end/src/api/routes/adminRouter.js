import express from "express";
const router = express.Router();


import {
    loginAdmin,logoutAdmin
} from "../controllers"

// import {
//     CreatUserValidator,
//     Auth
// } from "../middlewares"
router.post("/login", loginAdmin)
router.get("/logout", logoutAdmin)


export { router }