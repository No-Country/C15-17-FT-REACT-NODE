import express from 'express';
import { newPublication } from '../controller/postcontroller.js';

const router = express.Router();


router.post('/', newPublication);



export default router;
