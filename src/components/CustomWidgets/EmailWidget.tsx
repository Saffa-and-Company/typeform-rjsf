import React, { useState } from "react";
import { WidgetProps } from "@rjsf/utils";
import { motion } from "framer-motion";

const EmailWidget: React.FC<WidgetProps> = ({
  id,
  value,
  required,
  onChange,
  placeholder,
  schema,
  uiSchema,
  formContext,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const title = uiSchema?.["ui:title"] || schema.title;
  const description = uiSchema?.["ui:description"] || schema.description;

  // Get error message from formContext
  const fieldError = formContext?.errors?.[id];
  const errorMessage = fieldError?.__errors?.[0];
  const hasError = !!errorMessage;

  return (
    <div className="mb-6">
      <motion.label
        htmlFor={id}
        className={`block text-2xl font-bold mb-2 transition-colors duration-300 ${
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
      <motion.div
        className="relative"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <input
          type="email"
          id={id}
          value={value || ""}
          placeholder={placeholder || description}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full px-4 py-3 text-xl border-b-2 focus:outline-none transition-colors duration-300 ${
            hasError
              ? "border-red-500"
              : "border-gray-300 focus:border-blue-600"
          }`}
        />
        <motion.div
          className={`absolute bottom-0 left-0 w-full h-0.5 ${
            hasError ? "bg-red-500" : "bg-blue-600"
          }`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isFocused || hasError ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
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

export default EmailWidget;
