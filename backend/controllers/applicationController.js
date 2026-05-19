import Application from '../models/Application.js'

/** POST /api/applications — submit application */
export async function createApplication(req, res) {
  try {
    const application = await Application.create(req.body)
    res.status(201).json({ message: 'Application submitted successfully', application })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

/** GET /api/applications — list all applications (admin) */
export async function getApplications(req, res) {
  try {
    const applications = await Application.find().sort({ createdAt: -1 })
    res.json(applications)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

/** DELETE /api/applications/:id — delete application (admin) */
export async function deleteApplication(req, res) {
  try {
    const application = await Application.findByIdAndDelete(req.params.id)
    if (!application) return res.status(404).json({ error: 'Application not found' })
    res.json({ message: 'Application deleted' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
