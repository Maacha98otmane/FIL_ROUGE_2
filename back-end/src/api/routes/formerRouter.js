import express from "express";
const router = express.Router();


import {
    createFormer, removeFormer, searchFormer, updateFormer, getAllFormers, getFormer,getFormerStatus,confirmAccount
} from "../controllers"

import {
    Auth
} from "../middlewares"

router.get("/getOne/:id", getFormer)
router.get("/getAll",Auth('ADMIN'), getAllFormers)
router.get("/getFormerStatus",Auth('ADMIN'), getFormerStatus)
router.post("/create", createFormer)
router.delete("/delete/:id",Auth('ADMIN'), removeFormer)
router.patch("/update/:id", updateFormer)
router.post("/confirmAccount/:id", confirmAccount)

export { router }