/**
 * Allowed JSON Schema types.
 */
type AllowedTypes = "string" | "number" | "integer" | "boolean" | "object" | "array" | "null";
/**
 * Represents a field in the form.
 */
interface FormField {
    type: AllowedTypes;
    title?: string;
    description?: string;
    enum?: any[];
    default?: any;
    minimum?: number;
    maximum?: number;
    format?: "email";
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
}
export {};
