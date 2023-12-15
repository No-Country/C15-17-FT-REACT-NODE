import express from "express";
import {
    newPublication,
    allPublications,
} from "../controller/postcontroller.js";

const router = express.Router();

router.get("/traer", allPublications);
router.post("/crear", newPublication);

export default router;
