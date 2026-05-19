import { v2 as cloudinary } from 'cloudinary'
import multer from 'multer'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

// Use memory storage — we'll upload the buffer to Cloudinary ourselves
const upload = multer({ storage: multer.memoryStorage() })

/**
 * Upload a multer file buffer to Cloudinary.
 * Returns the secure URL string.
 */
function uploadToCloudinary(fileBuffer, folder = 'skilltrixa/blogs') {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        allowed_formats: ['jpg', 'jpeg', 'png', 'webp', 'gif'],
        transformation: [{ width: 1400, crop: 'limit', quality: 'auto' }],
      },
      (error, result) => {
        if (error) return reject(error)
        resolve(result.secure_url)
      },
    )
    stream.end(fileBuffer)
  })
}

export { cloudinary, upload, uploadToCloudinary }
