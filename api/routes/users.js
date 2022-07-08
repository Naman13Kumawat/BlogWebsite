import express from 'express';
import { getUser } from '../controllers/users.js';

const router = express.Router();

// GET
router.get("/:userId", getUser)

export default router;