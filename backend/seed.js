import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Blog from './models/Blog.js';
import { ALL_BLOGS } from '../frontend/src/data/blogPosts.js';

dotenv.config();

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to DB');

    for (const post of ALL_BLOGS) {
      const blogData = {
        title: post.title,
        slug: post.id,
        excerpt: post.excerpt,
        category: post.category,
        author: post.author,
        date: post.date,
        readTime: post.readTime,
        tags: post.tags,
        heroImage: post.image,
        content: post.content,
        status: 'published'
      };

      await Blog.updateOne({ slug: blogData.slug }, { $set: blogData }, { upsert: true });
      console.log(`Saved: ${blogData.title}`);
    }

    console.log('Seeding complete!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
