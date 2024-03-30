import express from "express";
import { signin, signup, google } from "../controllers/auth.controller.js";

const router = express.Router();

// Sign Up
router.post("/signup", signup);

// Sign In
router.post("/signin", signin);

// Google
router.post("/google", google);

export default router;
