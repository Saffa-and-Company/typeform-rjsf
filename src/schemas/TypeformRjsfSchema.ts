/**
 * Allowed JSON Schema types.
 */
type AllowedTypes = "string" | "number" | "integer" | "boolean" | "object" | "array" | "null" | "file";

/**
 * Represents a field in the form.
 */
interface FormField {
  type: AllowedTypes;
  title?: string;
  description?: string;
  enum?: any[];
  default?: any;
  // New properties for number validation
  minimum?: number;
  maximum?: number;
  // New property for email validation
  format?: "email"| "binary";
  accept?: string;  // Specifies accepted file types, e.g., "image/*" or ".jpg,.png"
  maxFileSize?: number;
}


/**
 * TypeformRjsfSchema represents the structure of a form for RJSF.
 */
export interface TypeformRjsfSchema {
  title?: string;
  description?: string;
  type: "object";
  properties: {
    [key: string]: FormField;
  };
  required?: string[];
  // Add any other form-level properties you need
}
