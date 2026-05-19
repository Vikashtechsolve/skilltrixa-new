/** POST /api/admin/login — simple env-based admin auth */
export function adminLogin(req, res) {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' })
  }

  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
    return res.json({ success: true, message: 'Login successful' })
  }

  return res.status(401).json({ error: 'Invalid credentials' })
}
