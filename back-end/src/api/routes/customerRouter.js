import express from "express";
const router = express.Router();


import {
    createCustomer,
    confirmEmail,
    createOrder,
    deleteCustomer,
    updateCustomer,
    getAllCustomers,
    incrementOwnCourse,
    getCustomer
} from "../controllers"

// import {
//     CreatUserValidator,
//     Auth
// } from "../middlewares"

router.get("/confirmEmail/:id", confirmEmail)
router.get("/getAllCustomers", getAllCustomers)
router.get("/getCustomer/:id", getCustomer)
router.post("/createCustomer", createCustomer)
router.post("/createOrder", createOrder)
router.delete("/deleteCustomer/:id", deleteCustomer)
router.patch("/updateCustomer/:id", updateCustomer)
router.patch("/incrementOwnCourse/:id", incrementOwnCourse)

export { router }