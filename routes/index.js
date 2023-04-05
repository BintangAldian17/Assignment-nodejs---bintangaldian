import express from "express"
import { addPost, deletePost, getPost } from "../controller/Post.js"

const router = express.Router()

router.get("/posts", getPost)
router.post("/posts", addPost)
router.delete("/posts/:id", deletePost)

export default router