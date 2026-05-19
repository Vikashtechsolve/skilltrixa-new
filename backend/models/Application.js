import mongoose from 'mongoose'

const applicationSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String, required: true },
    city: { type: String, default: '' },
    program: { type: String, default: '' },
    message: { type: String, default: '' },
  },
  { timestamps: true }
)

const Application = mongoose.model('Application', applicationSchema)
export default Application
