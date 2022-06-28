import express from 'express';
import { createUser, getUser } from '../controllers/users.js';

const router = express.Router();

// GET
router.get("/:userId", getUser)

// CREATE USER
router.post("/", createUser)

export default router;