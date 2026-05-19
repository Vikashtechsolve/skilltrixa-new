import mongoose from 'mongoose'

/**
 * Blog schema — mirrors the exact fields used by the frontend.
 * The `content` array stores structured blocks (paragraph, heading, list, code, etc.)
 */
const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    excerpt: { type: String, required: true },
    category: { type: String, required: true },
    author: { type: String, default: 'SkillTrixa' },
    date: { type: String, required: true },
    readTime: { type: String, default: '5 min read' },
    tags: [{ type: String }],
    heroImage: { type: String, default: '' },
    content: [{ type: mongoose.Schema.Types.Mixed }],
    status: { type: String, enum: ['draft', 'published'], default: 'published' },
  },
  { timestamps: true }
)

// Auto-generate slug from title if not provided
blogSchema.pre('validate', function (next) {
  if (this.title && !this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
  }
  next()
})

const Blog = mongoose.model('Blog', blogSchema)
export default Blog
