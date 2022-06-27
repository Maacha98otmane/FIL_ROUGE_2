import express from "express";
const router = express.Router();


import {
    loginAdmin,logoutAdmin,signup
} from "../controllers"

// import {
//     CreatUserValidator,
//     Auth
// } from "../middlewares"
router.post("/login", loginAdmin)
router.post("/signup", signup)
router.get("/logout", logoutAdmin)


export { router }