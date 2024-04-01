import express from "express";
import {
  signin,
  signup,
  signout,
  google,
} from "../controllers/auth.controller.js";

const router = express.Router();

// Sign Up
router.post("/signup", signup);

// Sign In
router.post("/signin", signin);

// Sign out
router.get("/signout", signout);

// Google
router.post("/google", google);

export default router;
