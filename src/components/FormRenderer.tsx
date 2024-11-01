import React, { useState, useEffect } from "react";
import Form from "@rjsf/core";
import { JSONSchema7 } from "json-schema";
import { motion, AnimatePresence } from "framer-motion";
import { createAjvInstance } from "../utils/jsonSchemaValidator";
import { IChangeEvent } from "@rjsf/core";
import TextWidget from "./CustomWidgets/TextWidget";
import NumberWidget from "./CustomWidgets/NumberWidget";
import EmailWidget from "./CustomWidgets/EmailWidget";
import SelectWidget from "./CustomWidgets/SelectWidget";
import CheckboxWidget from "./CustomWidgets/CheckboxWidget";
import ImageWidget from "./CustomWidgets/ImageWidget";
import { TypeformRjsfSchema } from "../schemas/TypeformRjsfSchema";
import pressEnter from "../assets/icons/pressEnter.svg";
import { ErrorSchema, RJSFSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
interface FormRendererProps {
  schema: TypeformRjsfSchema;
  handleSubmit: (formData: JSONSchema7) => void;

  handleTimeSpent?: (timeSpentData: Record<string, number>) => void;
}

const FormRenderer: React.FC<FormRendererProps> = ({
  schema,
  handleSubmit,
  handleTimeSpent,
}) => {
  const [currentStep, setCurrentStep] = useState(-1);
  const [formData, setFormData] = useState({});
  const fields = Object.keys(schema.properties || {});
  const currentField = fields[currentStep];
  const totalSteps = fields.length + 1;
  const [errors, setErrors] = useState<ErrorSchema | undefined>(undefined);
  const [isValid, setIsValid] = useState(true);
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [timeSpentData, setTimeSpentData] = useState<Record<string, number>>(
    {}
  );

  useEffect(() => {
    if (currentStep >= 0 && currentStep < fields.length) {
      setIsValid(validateCurrentField());
    } else {
      setIsValid(true);
    }
  }, [currentStep, formData]);

  // Update timer when step changes
  useEffect(() => {
    if (currentStep >= 0 && currentStep < fields.length) {
      // Reset start time whenever we switch to a new question
      setStartTime(Date.now());
    }
  }, [currentStep]);

  const handleNext = () => {
    if (currentStep === -1) {
      setCurrentStep(0);
      return;
    }

    const isCurrentFieldValid = validateCurrentField();
    if (!isCurrentFieldValid) {
      setIsValid(false);
      return;
    }

    if (currentStep >= 0 && currentStep < fields.length) {
      // Calculate time spent on current question
      const timeSpent = Math.round((Date.now() - startTime) / 1000);

      // Add to existing time for this question (if any)
      setTimeSpentData((prev) => ({
        ...prev,
        [currentField]: (prev[currentField] || 0) + timeSpent,
      }));
    }

    if (currentStep === totalSteps - 2) {
      // Calculate final time for last question and submit
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      const finalTimeSpentData = {
        ...timeSpentData,
        [currentField]: (timeSpentData[currentField] || 0) + timeSpent,
      };
      handleSubmit(formData);
      handleTimeSpent?.(finalTimeSpentData);
    }

    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
      setIsValid(true);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault(); // Prevent default form submission
        if (!isValid) return; // Don't proceed if the field is invalid
        handleNext();
      }
    };

    // Attach the event listener to the form element instead of window
    const form = document.querySelector("form");
    if (form) {
      form.addEventListener("keydown", handleKeyDown);
      return () => form.removeEventListener("keydown", handleKeyDown);
    }

    // Fallback to window listener if form is not found
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentStep, isValid, handleNext]);

  // Add this function to validate the current field
  const validateCurrentField = () => {
    if (currentStep === -1) return true; // Welcome screen
    if (currentStep >= fields.length) return true; // Thank you screen

    const currentValue = formData[currentField as keyof typeof formData];
    const fieldSchema: JSONSchema7 = {
      type: "object",
      properties: {
        [currentField]: schema.properties?.[currentField] as JSONSchema7,
      },
      required: schema.required?.includes(currentField) ? [currentField] : [],
    };

    // If field is required but empty, return false
    if (
      schema.required?.includes(currentField) &&
      (currentValue === undefined || currentValue === "")
    ) {
      return false;
    }

    const result = validator.validateFormData(
      { [currentField]: currentValue },
      fieldSchema
    );

    return result.errors.length === 0;
  };

  // Update handleNext to use validation

  const goBack = () => {
    if (currentStep > -1) {
      // Save time spent on current question before going back
      if (currentStep < fields.length) {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        setTimeSpentData((prev) => ({
          ...prev,
          [currentField]: (prev[currentField] || 0) + timeSpent,
        }));
      }
      setCurrentStep(currentStep - 1);
    }
  };

  // Update onChange to use the validator
  const onChange = (data: IChangeEvent<any>) => {
    setFormData({ ...formData, ...data.formData });

    if (currentStep === -1) return; // Don't validate welcome screen

    const fieldSchema = {
      type: "object",
      properties: {
        [currentField]: schema.properties[currentField],
      },
      required: schema.required?.includes(currentField) ? [currentField] : [],
    };

    const result = validator.validateFormData(
      { [currentField]: data.formData[currentField] },
      fieldSchema as RJSFSchema
    );

    setIsValid(result.errors.length === 0);
    setErrors(result.errorSchema);
  };

    const getWidgetType = (field: string): string => {
      const fieldSchema = schema.properties?.[field] as JSONSchema7;
      if (!fieldSchema) return "text";

      switch (fieldSchema.type) {
        case "string":
          if (fieldSchema.format === "email") return "email";
          if (fieldSchema.format === "binary") return "file";
          if (fieldSchema.enum) return "select";
          return "text";
        case "integer":
        case "number":
          return "number";
        case "boolean":
          return "checkbox";
        default:
          return "text";
      }
    };

    const renderContent = () => {
      if (currentStep === -1) {
        return <WelcomeScreen onStart={handleNext} schema={schema} />;
      } else if (currentStep === fields.length) {
        return <ThankYouScreen />;
      } else {
        const widgetType = getWidgetType(currentField);
        const fieldSchema = schema.properties?.[currentField] as JSONSchema7;

        return (
          <Form
            schema={{
              type: "object",
              properties: {
                [currentField]: {
                  ...fieldSchema,
                  title: undefined, // Remove RJSF's default title
                  description: undefined, // Remove RJSF's default description
                },
              },
              required: schema.required?.includes(currentField)
                ? [currentField]
                : [],
            }}
            formData={formData}
            validator={validator}
            showErrorList={false}
            uiSchema={{
              [currentField]: {
                "ui:widget": widgetType,
                "ui:title": fieldSchema.title, // Pass title to custom widget
                "ui:description": fieldSchema.description,
                "ui:options": {
                  label: false, // Disable RJSF's label rendering
                  description: false, // Disable RJSF's description rendering
                },
              },
            }}
            widgets={{
              text: TextWidget,
              number: NumberWidget,
              email: EmailWidget,
              select: SelectWidget,
              checkbox: CheckboxWidget,
              file: ImageWidget,
            }}
            formContext={{ errors }}
            onChange={onChange}
          >
            <div></div>
          </Form>
        );
      }
    };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <div className="absolute top-0 left-0 right-0 p-4">
        <ProgressBar current={currentStep + 1} total={totalSteps} />
      </div>
      <div className="p-8 rounded-lg shadow-xl flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="flex-grow flex flex-col justify-center overflow-auto"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
        <NavigationButtons
          currentStep={currentStep}
          totalSteps={totalSteps}
          onBack={goBack}
          onNext={handleNext}
          isNextDisabled={currentStep >= 0 && !isValid}
        />
      </div>
    </div>

  );
};

const ProgressBar: React.FC<{ current: number; total: number }> = ({
  current,
  total,
}) => (
  <div className="w-full bg-gray-200 bg-opacity-70 rounded-full h-1 border border-gray-300">
    <div
      className="bg-blue-600 h-full rounded-full transition-all duration-300 ease-in-out"
      style={{ width: `${(current / total) * 100}%` }}
    ></div>
  </div>
);

const NavigationButtons: React.FC<{
  currentStep: number;
  totalSteps: number;
  onBack: () => void;
  onNext: () => void;
  isNextDisabled?: boolean;
}> = ({ currentStep, totalSteps, onBack, onNext, isNextDisabled }) => (
  <div
    className={`flex ${currentStep === -1 ? "justify-center items-center" : "justify-between"
      }`}
  >
    {currentStep > -1 && currentStep < totalSteps - 1 && (
      <motion.button
        onClick={onBack}
        className="w-[135px] px-5 py-2 bg-[#333e48] rounded-[40px] justify-center items-center inline-flex"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-black text-sm font-semibold uppercase leading-[21px] tracking-widest">
          ← Back
        </span>
      </motion.button>
    )}
    {currentStep < totalSteps - 1 && (
      <div className="relative">
        <motion.button
          onClick={onNext}
          disabled={isNextDisabled}
          className={`w-48 px-5 py-2 rounded-full justify-center items-center inline-flex ${isNextDisabled
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-[#333e48] hover:scale-105 active:scale-95"
            }`}
          whileHover={!isNextDisabled ? { scale: 1.05 } : undefined}
          whileTap={!isNextDisabled ? { scale: 0.95 } : undefined}
        >
          <span className="text-black text-sm font-semibold uppercase leading-[21px] tracking-widest">
            {currentStep === -1 ? "Start" : "Next →"}
          </span>
        </motion.button>

        {currentStep === -1 && (
          <div className="absolute top-3 -right-24">
            <img
              src={pressEnter}
              alt="Press Enter"
              className="w-[80.08px] h-[13.12px]"
            />
          </div>
        )}
      </div>
    )}
  </div>
);

const WelcomeScreen: React.FC<{
  onStart: () => void;
  schema: TypeformRjsfSchema;
}> = ({ onStart, schema }) => (
  <motion.div
    className="flex flex-col justify-center items-center h-full p-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.h1
      className="text-center text-black text-lg font-semibold"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      {schema.title || "Welcome"}
    </motion.h1>
    <motion.p
      className="text-center text-black text-sm font-normal mt-2"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      {schema.description || "Please fill out the following form."}
    </motion.p>
  </motion.div>
);

const ThankYouScreen: React.FC = () => (
  <motion.div
    className="flex-col justify-center items-center gap-6 inline-flex h-full w-full"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <div className="relative bg-white/70 rounded-[10px] overflow-hidden p-8 h-full w-full flex items-center justify-center">
      <motion.div
        className="flex flex-col justify-center items-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <motion.h1
          className="text-4xl font-bold text-[#333133] mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Thank You!
        </motion.h1>
        <motion.p
          className="text-xl text-[#333133]"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Your submission has been received.
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <svg
            className="w-16 h-16 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  </motion.div>
);

export default FormRenderer;
