import React from "react";
import { WidgetProps } from "@rjsf/utils";
import { motion } from "framer-motion";

const RadioWidget: React.FC<WidgetProps> = ({
  id,
  value,
  required,
  onChange,
  schema,
  uiSchema,
  formContext,
}) => {
  const options = schema.oneOf
    ? schema.oneOf.map((option: any) => ({
        value: option.const,
        label: option.title || option.const,
      }))
    : [
        { value: true, label: "True" },
        { value: false, label: "False" },
      ];

  const title = uiSchema?.["ui:title"] || schema.title;
  const questionNumber = uiSchema?.["ui:questionNumber"];
  const fieldError = formContext?.errors?.[id];
  const errorMessage = fieldError?.__errors?.[0];
  const hasError = !!errorMessage;

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
      <motion.div
        className="space-y-2"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {options.map((option) => (
          <label key={option.value.toString()} className="flex items-center">
            <input
              type="radio"
              id={`${id}-${option.value}`}
              name={id}
              value={option.value.toString()}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="form-radio h-4 w-4 text-blue-600"
            />
            <span className="ml-2 text-lg">{option.label}</span>
          </label>
        ))}
      </motion.div>
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

export default RadioWidget;
