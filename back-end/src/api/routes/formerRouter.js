import express from "express";
const router = express.Router();


import {
    createFormer,confirmFormerEmail, deleteFormer, updateFormer,getAllFormers,getFormer,getTopFormersByRating,updateRating,countFormers
} from "../controllers"

// import {
//     Auth
// } from "../middlewares"

router.post("/confirmFormerEmail/:id", confirmFormerEmail)
router.get("/getAllFormers", getAllFormers)
router.get("/countFormers", countFormers)
router.get("/getTopFormersByRating", getTopFormersByRating)
router.get("/getFormer/:id", getFormer)
router.post("/createFormer", createFormer)
router.delete("/deleteFormer/:id", deleteFormer)
router.patch("/updateFormer/:id", updateFormer)
router.patch("/updateRating/:id", updateRating)

export { router }