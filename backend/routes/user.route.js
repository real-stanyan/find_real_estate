import express from "express";
import {
  updateUser,
  deleteUser,
  getUserListing,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";
const router = express.Router();

// update user
router.post("/update/:id", verifyToken, updateUser);
// delete user
router.delete("/delete/:id", verifyToken, deleteUser);
//get user listing
router.get("/listing/:id", verifyToken, getUserListing);

export default router;
