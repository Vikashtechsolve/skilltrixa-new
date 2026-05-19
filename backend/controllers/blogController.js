import Blog from '../models/Blog.js'
import { uploadToCloudinary } from '../config/cloudinary.js'

/** GET /api/blogs — all published blogs, newest first */
export async function getBlogs(req, res) {
  try {
    const blogs = await Blog.find({ status: 'published' }).sort({ createdAt: -1 })
    res.json(blogs)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

/** GET /api/blogs/:slug — single blog by slug */
export async function getBlogBySlug(req, res) {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug })
    if (!blog) return res.status(404).json({ error: 'Blog not found' })
    res.json(blog)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

/** GET /api/blogs/all — all blogs (admin view, includes drafts) */
export async function getAllBlogsAdmin(req, res) {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 })
    res.json(blogs)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

/** POST /api/blogs — create blog */
export async function createBlog(req, res) {
  try {
    const data = { ...req.body }

    // Parse tags if sent as comma-separated string
    if (typeof data.tags === 'string') {
      data.tags = data.tags.split(',').map((t) => t.trim()).filter(Boolean)
    }

    // Parse content if sent as JSON string
    if (typeof data.content === 'string') {
      try { data.content = JSON.parse(data.content) } catch { /* leave as-is */ }
    }

    // Auto-generate slug from title
    if (data.title && !data.slug) {
      data.slug = data.title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim()
    }

    // Upload image to Cloudinary if file was provided
    if (req.file) {
      data.heroImage = await uploadToCloudinary(req.file.buffer)
    }

    const blog = await Blog.create(data)
    res.status(201).json(blog)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

/** PUT /api/blogs/:id — update blog */
export async function updateBlog(req, res) {
  try {
    const data = { ...req.body }

    if (typeof data.tags === 'string') {
      data.tags = data.tags.split(',').map((t) => t.trim()).filter(Boolean)
    }

    if (typeof data.content === 'string') {
      try { data.content = JSON.parse(data.content) } catch { /* leave as-is */ }
    }

    // Upload new image to Cloudinary if file was provided
    if (req.file) {
      data.heroImage = await uploadToCloudinary(req.file.buffer)
    }

    const blog = await Blog.findByIdAndUpdate(req.params.id, data, { new: true, runValidators: true })
    if (!blog) return res.status(404).json({ error: 'Blog not found' })
    res.json(blog)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

/** DELETE /api/blogs/:id — delete blog */
export async function deleteBlog(req, res) {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id)
    if (!blog) return res.status(404).json({ error: 'Blog not found' })
    res.json({ message: 'Blog deleted' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
