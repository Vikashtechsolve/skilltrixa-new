import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './config/db.js'
import blogRoutes from './routes/blogRoutes.js'
import applicationRoutes from './routes/applicationRoutes.js'
import adminRoutes from './routes/adminRoutes.js'

const app = express()
const PORT = process.env.PORT || 5000

// Connect to MongoDB
await connectDB()

// Middleware
app.use(cors())
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// Routes
app.use('/api/blogs', blogRoutes)
app.use('/api/applications', applicationRoutes)
app.use('/api/admin', adminRoutes)

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
