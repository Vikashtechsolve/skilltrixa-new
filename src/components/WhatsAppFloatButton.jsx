import './WhatsAppFloatButton.css'

const WHATSAPP_URL =
  'https://wa.me/919876543210?text=Hi%20Skilltrixa%2C%20I%20need%20help%20with%20your%20programs.'

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.52 3.48A11.88 11.88 0 0012.07 0C5.46 0 .1 5.36.1 11.97c0 2.1.55 4.15 1.59 5.95L0 24l6.27-1.64a11.95 11.95 0 005.8 1.48h.01c6.61 0 11.97-5.36 11.97-11.97 0-3.2-1.24-6.2-3.53-8.4zM12.08 21.8h-.01a9.88 9.88 0 01-5.03-1.38l-.36-.21-3.72.97.99-3.62-.23-.37a9.86 9.86 0 01-1.53-5.22c0-5.43 4.42-9.85 9.86-9.85 2.64 0 5.12 1.03 6.98 2.9a9.8 9.8 0 012.89 6.98c0 5.43-4.43 9.85-9.84 9.85zm5.4-7.38c-.3-.16-1.77-.87-2.04-.97-.27-.1-.47-.16-.67.16-.2.3-.77.97-.95 1.17-.17.2-.34.23-.64.08-.3-.16-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.47.13-.63.13-.13.3-.34.44-.5.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.53-.08-.16-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.5h-.56c-.2 0-.53.08-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.48.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.11-.27-.18-.56-.34z" />
    </svg>
  )
}

export default function WhatsAppFloatButton() {
  return (
    <a
      href={WHATSAPP_URL}
      className="wa-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with Skilltrixa support"
    >
      <span className="wa-float-label">Contact us</span>
      <span className="wa-float-btn" aria-hidden>
        <WhatsAppIcon />
      </span>
    </a>
  )
}

