import React, { useState } from "react";
import { WidgetProps } from "@rjsf/utils";
import { motion } from "framer-motion";

const SelectWidget: React.FC<WidgetProps> = ({
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
  const options = uiSchema?.["ui:enumOptions"] || [];
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
        <select
          id={id}
          value={value || ""}
          onChange={(e) => onChange([e.target.value])}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full px-4 py-3 text-xl border-b-2 focus:outline-none transition-colors duration-300 bg-transparent appearance-none ${
            hasError
              ? "border-red-500"
              : "border-gray-300 focus:border-blue-600"
          }`}
        >
          <option value="" disabled>
            {placeholder || description || "Please select an option"}
          </option>
          {options.map((option: string) => {
            const optionValue =
              typeof option === "string" || typeof option === "number"
                ? option
                : null;
            const optionLabel =
              typeof option === "string"
                ? option.charAt(0).toUpperCase() + option.slice(1)
                : option;

            return optionValue !== null ? (
              <option key={optionValue.toString()} value={optionValue}>
                {typeof optionLabel === "string" ||
                typeof optionLabel === "number"
                  ? optionLabel
                  : JSON.stringify(optionLabel)}
              </option>
            ) : null;
          })}
        </select>
        <motion.div
          className={`absolute bottom-0 left-0 w-full h-0.5 ${
            hasError ? "bg-red-500" : "bg-blue-600"
          }`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isFocused || hasError ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
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

export default SelectWidget;
