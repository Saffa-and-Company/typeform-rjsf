// src/components/CustomWidgets/TextWidget.tsx
import React, { useState } from "react";
import { WidgetProps } from "@rjsf/utils";
import { motion } from "framer-motion";

const TextWidget: React.FC<WidgetProps> = ({
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
  const questionNumber = uiSchema?.["ui:questionNumber"];

  // Get error message from formContext
  const fieldError = formContext?.errors?.[id];
  const errorMessage = fieldError?.__errors?.[0];
  const hasError = !!errorMessage;

  const isMultiline = schema.format === "multiline";

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" && isMultiline) {
      e.preventDefault(); // Prevent the default action of ArrowDown (moving the cursor)
      onChange(value + "\n"); // Add a new line to the value
    }
  };

  return (
    <div className="mb-6">
      <motion.label
        htmlFor={id}
        className={`block text-2xl font-bold mb-2 transition-colors duration-300 ${isFocused
            ? "text-blue-600"
            : hasError
              ? "text-red-500"
              : "text-gray-700"
          }`}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {questionNumber}. {title} {required && <span className="text-red-500">*</span>}
      </motion.label>
      <motion.div
        className="relative"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {/* Render either input or textarea based on isMultiline */}
        {isMultiline ? (
          <>
            <textarea
              id={id}
              value={value || ""}
              placeholder={placeholder || description || "Type your answer here"}
              onChange={(e) => onChange(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              className={`w-full px-4 py-3 text-xl border-b-2 focus:outline-none transition-colors duration-300 placeholder:text-slate-400 ${hasError
                  ? "border-red-500"
                  : "border-gray-300 focus:border-blue-600"
                }`}
              rows={4} // Adjust the number of rows as needed
            />
            <p className="text-sm text-gray-500 mt-2">
              Press the <span className="font-bold">Arrow Down</span> key to add a new line.
            </p>
          </>
        ) : (
          <input
            type="text"
            id={id}
            value={value || ""}
            placeholder={placeholder || description || "Type your answer here"}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={handleBlur}
            className={`w-full px-4 py-3 text-xl border-b-2 focus:outline-none transition-colors duration-300 placeholder:text-slate-400 ${hasError
                ? "border-red-500"
                : "border-gray-300 focus:border-blue-600"
              }`}
          />
        )}
        <motion.div
          className={`absolute bottom-0 left-0 w-full h-0.5 ${hasError ? "bg-red-500" : "bg-blue-600"
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

export default TextWidget;
