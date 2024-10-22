import { default as React } from 'react';
import { JSONSchema7 } from 'json-schema';
import { TypeformRjsfSchema } from '../schemas/TypeformRjsfSchema';
interface FormRendererProps {
    schema: TypeformRjsfSchema;
    handleSubmit: (formData: JSONSchema7) => void;
}
declare const FormRenderer: React.FC<FormRendererProps>;
export default FormRenderer;
