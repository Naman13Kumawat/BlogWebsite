import express from 'express';
import { createBlog, getBlogs, getBlog, deleteBlog, updateBlog } from '../controllers/blogs.js';

const router = express.Router();

// CREATE BLOG
router.post("/:username", createBlog)

// GET BLOG
router.get("/:blogId", getBlog)

// GET ALL
router.get("/", getBlogs)

// UPDATE BLOG
router.put("/:blogId", updateBlog)

// DELETE BLOG
router.delete("/:blogId", deleteBlog)

export default router;