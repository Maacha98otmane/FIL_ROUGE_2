import express from "express";
const router = express.Router();


import {
    getCourse ,getAllCourse, addCourse, deleteCourse, getRandomCourse, getCourseWithEpisodes
} from "../controllers"

// import {
//     CreatUserValidator,
//     Auth
// } from "../middlewares"

router.get("/getOne/:id", getCourse)
router.get("/getRandomCourse", getRandomCourse)
router.get("/getCourseWithEpisodes/:id", getCourseWithEpisodes)
router.get("/getAll", getAllCourse)
router.post("/create", addCourse)
router.delete("/delete/:id", deleteCourse)

export { router }