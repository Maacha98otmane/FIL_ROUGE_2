import express from "express";
const router = express.Router();


import {
    addEpisode, getEpisode, getAllEpisodes, deleteEpisode, updateEpisode, countEpisodes
} from "../controllers"

import {
    Auth
} from "../middlewares"

router.get("/getOne/:id", getEpisode)
router.get("/getAll", getAllEpisodes)
router.post("/create", addEpisode)
router.delete("/delete/:id",Auth('ADMIN'), deleteEpisode)
router.patch("/update/:id",Auth('ADMIN'), updateEpisode)
router.get("/count/:id", countEpisodes)

export { router }