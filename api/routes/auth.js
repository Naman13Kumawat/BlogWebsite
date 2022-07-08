import express from 'express';
import { register } from '../controllers/auth.js';

const router = express.Router();

// REGISTER
router.post("/register", register);

// // LOGIN
// router.get("/login", login)

// // LOGOUT
// router.get("/logout", logout)

export default router;