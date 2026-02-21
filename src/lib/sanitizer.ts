/**
 * Sanitizes user input for WhatsApp messages to prevent potential security issues.
 * Removes HTML tags, control characters, and limits length.
 */
export function sanitizeForWhatsApp(text: string): string {
  if (!text) return "";
  return text
    .replace(/[<>]/g, "") // Remove potential HTML brackets
    // eslint-disable-next-line no-control-regex
    .replace(/[\x00-\x08\x0B-\x0C\x0E-\x1F\x7F]/g, "") // Remove control characters (except tab/newline)
    .replace(/[\r\n]+/g, " ") // Replace newlines with spaces
    .trim()
    .slice(0, 1000); // Limit length to prevent abuse
}

/**
 * Sanitizes name input - allows letters, spaces, and common name characters.
 */
export function sanitizeName(name: string): string {
  if (!name) return "";
  return name
    // eslint-disable-next-line no-misleading-character-class
    .replace(/[^a-zA-Z\u0900-\u097F\s.-]/g, "") // Allow Latin and Devanagari scripts
    .trim()
    .slice(0, 100);
}

/**
 * Sanitizes phone number input - keeps only digits and + sign.
 */
export function sanitizePhone(phone: string): string {
  if (!phone) return "";
  return phone.replace(/[^0-9+]/g, "").slice(0, 15);
}

/**
 * Sanitizes email input - removes potentially dangerous characters.
 */
export function sanitizeEmail(email: string): string {
  if (!email) return "";
  return email
    .replace(/[<>]/g, "") // Remove HTML brackets
    .trim()
    .toLowerCase()
    .slice(0, 255);
}
