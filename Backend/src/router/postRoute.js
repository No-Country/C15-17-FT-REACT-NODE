import express from "express";
import {
    newPublication,
    allPublications,
    deletePublication,
    getPublicationsByTeam,
} from "../controller/postcontroller.js";

const router = express.Router();

router.get("/traer", allPublications);
router.get("/traer/team/:team", getPublicationsByTeam);
router.post("/crear", newPublication);
router.delete("/:id", deletePublication);

export default router;
