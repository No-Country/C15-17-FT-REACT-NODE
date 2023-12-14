import { getUsers, getUser } from '../controller/usercontroller.js';
import express from 'express';
const router = express.Router();


router.get('/', getUsers);
router.get('/:id', getUser);


export default router;
