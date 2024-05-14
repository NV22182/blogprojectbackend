import express from "express";
const router = express.Router();
import {
    createPost,
    deletePost,
    getPost,
    updatePost,
  } from "../controllers/postControllers";
import { authGuard, adminGuard } from "../middleware/authMiddleware";

router.post("/", authGuard, adminGuard, createPost);
router.put("/:slug", authGuard, adminGuard, updatePost);
router
.delete(authGuard, adminGuard, deletePost)
.get(getPost);
  .route("/:slug")
  .put(authGuard, adminGuard, updatePost)
  .delete(authGuard, adminGuard, deletePost);

export default router;