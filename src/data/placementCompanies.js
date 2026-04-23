/**
 * Company logos via Simple Icons (SVG on jsDelivr) — reliable, no API key.
 * @see https://github.com/simple-icons/simple-icons
 * Pinned version so URLs stay stable.
 */
export const SIMPLE_ICONS_VERSION = '11.15.0'

export const PLACEMENT_COMPANIES = [
  // Global product & platforms
  { id: 'google', name: 'Google', iconSlug: 'google' },
  { id: 'microsoft', name: 'Microsoft', iconSlug: 'microsoft' },
  { id: 'amazon', name: 'Amazon', iconSlug: 'amazon' },
  { id: 'meta', name: 'Meta', iconSlug: 'meta' },
  { id: 'apple', name: 'Apple', iconSlug: 'apple' },
  { id: 'netflix', name: 'Netflix', iconSlug: 'netflix' },
  { id: 'adobe', name: 'Adobe', iconSlug: 'adobe' },
  { id: 'salesforce', name: 'Salesforce', iconSlug: 'salesforce' },
  { id: 'oracle', name: 'Oracle', iconSlug: 'oracle' },
  { id: 'sap', name: 'SAP', iconSlug: 'sap' },
  { id: 'ibm', name: 'IBM', iconSlug: 'ibm' },
  { id: 'stripe', name: 'Stripe', iconSlug: 'stripe' },
  { id: 'uber', name: 'Uber', iconSlug: 'uber' },
  { id: 'spotify', name: 'Spotify', iconSlug: 'spotify' },
  { id: 'shopify', name: 'Shopify', iconSlug: 'shopify' },
  { id: 'atlassian', name: 'Atlassian', iconSlug: 'atlassian' },
  { id: 'slack', name: 'Slack', iconSlug: 'slack' },
  { id: 'zoom', name: 'Zoom', iconSlug: 'zoom' },
  { id: 'linkedin', name: 'LinkedIn', iconSlug: 'linkedin' },
  { id: 'airbnb', name: 'Airbnb', iconSlug: 'airbnb' },
  { id: 'nvidia', name: 'NVIDIA', iconSlug: 'nvidia' },
  { id: 'intel', name: 'Intel', iconSlug: 'intel' },
  { id: 'amd', name: 'AMD', iconSlug: 'amd' },
  { id: 'github', name: 'GitHub', iconSlug: 'github' },
  { id: 'docker', name: 'Docker', iconSlug: 'docker' },
  { id: 'kubernetes', name: 'Kubernetes', iconSlug: 'kubernetes' },
  // Services, IT majors & India product
  { id: 'accenture', name: 'Accenture', iconSlug: 'accenture' },
  { id: 'tcs', name: 'TCS', iconSlug: 'tcs' },
  { id: 'infosys', name: 'Infosys', iconSlug: 'infosys' },
  { id: 'wipro', name: 'Wipro', iconSlug: 'wipro' },
  { id: 'cognizant', name: 'Cognizant', iconSlug: 'cognizant' },
  { id: 'hcl', name: 'HCL', iconSlug: 'hcl' },
  { id: 'persistent', name: 'Persistent', iconSlug: 'persistent' },
  { id: 'paypal', name: 'PayPal', iconSlug: 'paypal' },
  { id: 'bosch', name: 'Bosch', iconSlug: 'bosch' },
  { id: 'siemens', name: 'Siemens', iconSlug: 'siemens' },
  { id: 'flipkart', name: 'Flipkart', iconSlug: 'flipkart' },
  { id: 'razorpay', name: 'Razorpay', iconSlug: 'razorpay' },
  { id: 'zoho', name: 'Zoho', iconSlug: 'zoho' },
  { id: 'swiggy', name: 'Swiggy', iconSlug: 'swiggy' },
  { id: 'paytm', name: 'Paytm', iconSlug: 'paytm' },
]

export function placementIconUrl(iconSlug) {
  return `https://cdn.jsdelivr.net/npm/simple-icons@${SIMPLE_ICONS_VERSION}/icons/${iconSlug}.svg`
}

/**
 * Simple Icons are monochrome path SVGs; when used as <img> they show as black.
 * We color them with CSS `mask` + `background` using each brand’s official Simple Icons hex
 * (plus readable alternatives where the brand is pure black in the library).
 * @type {Readonly<Record<string, string>>}
 */
export const PLACEMENT_BRAND_HEX = Object.freeze({
  google: '#4285F4',
  microsoft: '#5E5E5E',
  amazon: '#FF9900',
  meta: '#0866FF',
  /* SI uses #000000; slightly lifted so it is not a flat black blob on white */
  apple: '#3C3C43',
  netflix: '#E50914',
  adobe: '#FF0000',
  salesforce: '#00A1E0',
  oracle: '#F80000',
  sap: '#0FAAFF',
  ibm: '#0530AD',
  stripe: '#635BFF',
  /* SI #000000; use Uber’s blue for a clearer mark */
  uber: '#276EF1',
  spotify: '#1DB954',
  shopify: '#7AB55C',
  atlassian: '#0052CC',
  slack: '#4A154B',
  zoom: '#0B5CFF',
  linkedin: '#0A66C2',
  airbnb: '#FF5A5F',
  nvidia: '#76B900',
  intel: '#0071C5',
  amd: '#ED1C24',
  github: '#181717',
  docker: '#2496ED',
  kubernetes: '#326CE5',
  accenture: '#A100FF',
  tcs: '#E20074',
  infosys: '#007CC3',
  wipro: '#194199',
  cognizant: '#1B4D7E',
  hcl: '#0F62AC',
  persistent: '#DE001B',
  paypal: '#003087',
  bosch: '#EA0016',
  siemens: '#009999',
  flipkart: '#2874F0',
  razorpay: '#3395FF',
  zoho: '#C8202B',
  swiggy: '#FC8019',
  paytm: '#00BAF2',
})

export function placementBrandColor(iconSlug) {
  return PLACEMENT_BRAND_HEX[iconSlug] ?? '#2b2b2b'
}

/** Second row: rotated order so both bands feel different */
export function getPlacementCompaniesRowB() {
  const n = PLACEMENT_COMPANIES.length
  const pivot = Math.floor(n / 3)
  return [...PLACEMENT_COMPANIES.slice(pivot), ...PLACEMENT_COMPANIES.slice(0, pivot)]
}
