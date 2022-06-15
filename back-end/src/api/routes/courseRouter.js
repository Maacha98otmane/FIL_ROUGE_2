import express from "express";
const router = express.Router();


import {
    getCourse ,getAllCourse, addCourse, deleteCourse, updateCourse
} from "../controllers"

// import {
//     CreatUserValidator,
//     Auth
// } from "../middlewares"

router.get("/getOne/:id", getCourse)
router.get("/getAll", getAllCourse)
router.post("/create", addCourse)
router.delete("/delete/:id", deleteCourse)
router.patch("/update/:id", updateCourse)

export { router }