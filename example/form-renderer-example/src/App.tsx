import React from "react";
import { FormRenderer, TypeformRjsfSchema } from "typeform-rjsf";
import "./App.css";
import { JSONSchema7 } from "json-schema";

const exampleSchema: TypeformRjsfSchema = {
  title: "CTribe Festival 2024: A Celebration of Community and Innovation",
  description:
    "Welcome to the application process for CTribe Festival 2024! This annual gathering brings together visionaries, creators, and innovators from around the world. Please fill out the following form comprehensively to apply for a ticket. Your responses will help us curate a diverse and dynamic community for this transformative event. We're excited to learn about you and how you might contribute to and benefit from the CTribe experience.",
  type: "object",
  properties: {
    name: {
      type: "string",
      title: "Full Name",
      description: "Please enter your full name",
    },
    email: {
      type: "string",
      title: "Email Address",
      description: "elon@musk.com",
      format: "email",
    },
    age: {
      type: "integer",
      title: "Age",
      description: "Please enter your age",
      minimum: 18,
    },
    gender: {
      type: "string",
      title: "Gender",
      description: "Please select your gender",
      enum: ["male", "female", "other"],
    },
    agree: {
      type: "boolean",
      title: "Agree to terms",
      description: "Please agree to the terms and conditions",
    },
  },
  required: ["name", "email", "age", "agree"],
};

const App: React.FC = () => {
  const handleSubmit = (formData: JSONSchema7) => {
    alert("Form submitted");
    console.log("Form submitted with complete data:", formData);
    console.table(formData);
  };

  return (
    <div className="App">
      <FormRenderer schema={exampleSchema} handleSubmit={handleSubmit} />
    </div>
  );
};

export default App;
