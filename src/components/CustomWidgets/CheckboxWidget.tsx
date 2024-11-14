import React, { useState } from "react";
import { WidgetProps } from "@rjsf/utils";
import { motion } from "framer-motion";

const CheckboxWidget: React.FC<WidgetProps> = ({
  id,
  value,
  required,
  onChange,
  schema,
  uiSchema,
  formContext,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const title = uiSchema?.["ui:title"] || schema.title;
  const questionNumber = uiSchema?.["ui:questionNumber"];

  // Get error message from formContext
  const fieldError = formContext?.errors?.[id];
  const errorMessage = fieldError?.__errors?.[0];
  const hasError = !!errorMessage;
  

  return (
    <div className="mb-6 flex flex-col items-center">
      <motion.div
        className="relative flex items-center"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <input
          type="checkbox"
          id={id}
          checked={value || false}
          onChange={(e) => onChange(e.target.checked)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-6 h-6 text-blue-600 rounded-md focus:ring-2 focus:ring-offset-2 focus:border-transparent transition-all duration-300 ${
            hasError
              ? "border-2 border-red-500 focus:ring-red-500"
              : "border-2 border-gray-300 focus:ring-blue-500"
          }`}
        />
        <motion.label
          htmlFor={id}
          className={`ml-3 text-2xl font-bold transition-colors duration-300 ${
            isFocused
              ? "text-blue-600"
              : hasError
              ? "text-red-500"
              : "text-gray-700"
          }`}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {title} {required && <span className="text-red-500">*</span>}
        </motion.label>
      </motion.div>
      {hasError && (
        <motion.p
          className="text-red-500 text-sm mt-2"
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
