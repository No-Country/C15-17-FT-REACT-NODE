import express from 'express';
import postRouter from './postRoute.js';
import loginRouter from './loginRoute.js';

const router = express.Router();

router.use("/auth", loginRouter);
router.use("/publication", postRouter);

export default router;