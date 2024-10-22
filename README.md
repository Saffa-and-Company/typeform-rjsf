# @ctnetworks/typeform-rjsf

A customizable form renderer built with React and RJSF that provides a Typeform-like experience.

## Installation

```bash
npm install @ctnetworks/typeform-rjsf
```

## Usage

```tsx
import { FormRenderer, TypeformRjsfSchema } from "@ctnetworks/typeform-rjsf";

const schema: TypeformRjsfSchema = {
  // Your schema here
};

const handleSubmit = (formData: JSONSchema7) => {
  // Handle form submission
};

<FormRenderer schema={schema} handleSubmit={handleSubmit} />
```

