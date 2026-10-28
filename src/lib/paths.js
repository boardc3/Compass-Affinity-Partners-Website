const base = import.meta.env.BASE_URL.replace(/\/$/, '')

export const homePath = () => `${base}/` || '/'

export const homeSection = (id) => `${homePath()}#${id}`

export const SCENESET_URL = 'https://sceneset.ai'
export const HSRN_URL = 'https://hsrn.com'
export const AFR_URL = 'https://www.afrbenefits.com'
export const CONTACT_EMAIL = 'mike@CompassAffinityPartners.com'
export const INFO_EMAIL = 'info@CompassAffinityPartners.com'
export const PHONE_DISPLAY = '(443) 666-0776'
export const PHONE_TEL = '+14436660776'
