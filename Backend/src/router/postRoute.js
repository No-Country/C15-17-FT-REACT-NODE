import express from "express";
import {
    newPublication,
    allPublications,
    deletePublication,
    getPublicationsByTeam,
    getPublicationById
} from "../controller/postcontroller.js";

const router = express.Router();

router.get("/traer", allPublications);
router.get("/traer/:id", getPublicationById);
router.get("/traer/team/:team", getPublicationsByTeam);
router.post("/crear", newPublication);
router.delete("/:id", deletePublication);

export default router;
