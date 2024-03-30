import express from "express";
import { signin, signup } from "../controllers/auth.controller.js";

const router = express.Router();

// Sign Up
router.post("/signup", signup);

// Sign In
router.post("/signin", signin);

export default router;
