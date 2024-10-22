// src/utils/jsonSchemaValidator.ts
import Ajv, { ErrorObject } from "ajv";
import { ValidatorType, RJSFSchema, RJSFValidationError, ErrorSchema } from "@rjsf/utils";

export const createAjvInstance = (): ValidatorType => {
  const ajv = new Ajv({allErrors: true, verbose: true});

  return {
    validateFormData: (formData: any, schema: RJSFSchema) => {
      const valid = ajv.validate(schema, formData);
      return {
        errors: (ajv.errors || []).map(error => ({
          ...error,
          stack: error.message || ''
        })) as RJSFValidationError[],
        errorSchema: {}
      };
    },
    toErrorList: (errorSchema: ErrorSchema<any> | undefined) => {
      if (!errorSchema) return [];
      return Object.entries(errorSchema).map(([key, value]) => ({
        property: key,
        message: typeof value === 'object' && 'message' in value ? value.message : "Unknown error",
        stack: typeof value === 'object' && 'message' in value ? value.message : "Unknown error"
      })) as RJSFValidationError[];
    },
    isValid: (schema: RJSFSchema, formData: any) => {
      return ajv.validate(schema, formData) as boolean;
    },
    rawValidation: <Result = any>(schema: RJSFSchema, formData?: any) => {
      const valid = ajv.validate(schema, formData);
      return {
        errors: ajv.errors as Result[] | undefined,
        validationError: valid ? undefined : new Error('Validation failed')
      };
    }
  };
};
