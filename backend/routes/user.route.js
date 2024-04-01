import express from "express";
import { updateUser, deleteUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";
const router = express.Router();

// update user
router.post("/update/:id", verifyToken, updateUser);
// delete user
router.delete("/delete/:id", verifyToken, deleteUser);

export default router;
