import express from "express";
const router = express.Router();
import {
    registerUser,
    loginUser,
    userProfile,
  } from "../controllers/userControllers";
  import { authGuard } from "../middleware/authMiddleware";

  router.post("/login", loginUser);
router.get("/profile", authGuard, userProfile);
router.post("/register", registerUser);

export default router;