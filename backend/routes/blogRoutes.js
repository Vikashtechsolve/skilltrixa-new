import { Router } from 'express'
import { upload } from '../config/cloudinary.js'
import {
  getBlogs,
  getBlogBySlug,
  getAllBlogsAdmin,
  createBlog,
  updateBlog,
  deleteBlog,
} from '../controllers/blogController.js'

const router = Router()

// Public routes
router.get('/', getBlogs)
router.get('/all', getAllBlogsAdmin)
router.get('/:slug', getBlogBySlug)

// Admin routes
router.post('/', upload.single('heroImage'), createBlog)
router.put('/:id', upload.single('heroImage'), updateBlog)
router.delete('/:id', deleteBlog)

export default router
