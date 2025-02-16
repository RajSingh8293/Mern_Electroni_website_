import express, { Router } from "express";
import {
  loginUser,
  logoutUser,
  profileUser,
  registerUser,
  updateUser,
} from "../controllers/user.controllers.js";
import { isAuthenticated } from "../middleware/auth.middleware.js";
const router = Router();

router.post("/users/register", registerUser);
router.post("/users/login", loginUser);
router.get("/users/logout", logoutUser);
router.get("/users/profile", isAuthenticated, profileUser);
router.put("/users/update", isAuthenticated, updateUser);

export default router;
