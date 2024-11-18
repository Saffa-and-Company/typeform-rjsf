import React from "react";
import { WidgetProps } from "@rjsf/utils";
import { motion } from "framer-motion";

const CheckboxWidget: React.FC<WidgetProps> = ({
  id,
  value = [],
  required,
  onChange,
  schema,
  uiSchema,
  formContext,
}) => {
  const options = uiSchema?.["ui:enumOptions"] || [];
  const title = uiSchema?.["ui:title"] || schema.title;
  const description = uiSchema?.["ui:description"] || schema.description;
  const questionNumber = uiSchema?.["ui:questionNumber"];

  // Get error message from formContext
  const fieldError = formContext?.errors?.[id];
  const errorMessage = fieldError?.__errors?.[0];
  const hasError = !!errorMessage;

  const handleCheckboxChange = (optionValue: string) => {
    const updatedValue = value.includes(optionValue)
      ? value.filter((item: string) => item !== optionValue)
      : [...value, optionValue];
    onChange(updatedValue);
  };

  return (
    <div className="mb-6">
      <motion.label
        htmlFor={id}
        className={`block text-2xl font-bold mb-2 transition-colors duration-300 ${
          hasError ? "text-red-500" : "text-gray-700"
        }`}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {questionNumber}. {title} {required && <span className="text-red-500">*</span>}
      </motion.label>
      {description && (
        <motion.p
          className="text-gray-600 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>
      )}
      <div>
        {options.map((option: string) => (
          <motion.div
            key={option}
            className="flex items-center mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <input
              id={`${id}_${option}`}
              type="checkbox"
              value={option}
              checked={value.includes(option)}
              onChange={() => handleCheckboxChange(option)}
              className={`mr-2 focus:ring-blue-600 ${
                hasError ? "text-red-500" : "text-blue-600"
              }`}
            />
            <label
              htmlFor={`${id}_${option}`}
              className="text-xl text-gray-700"
            >
              {option}
            </label>
          </motion.div>
        ))}
      </div>
      {hasError && (
        <motion.p
          className="text-red-500 text-sm mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {errorMessage}
        </motion.p>
      )}
    </div>
  );
};

export default CheckboxWidget;
