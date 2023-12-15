import { getUsers, getUser, updateUser } from '../controller/usercontroller.js';
import express from 'express';
const router = express.Router();


router.get('/', getUsers);
router.get('/:id', getUser);
router.patch('/:id', updateUser)


export default router;
