// src/components/CustomWidgets/ImageWidget.tsx
import React, { useState } from "react";
import { WidgetProps } from "@rjsf/utils";
import { motion } from "framer-motion";

const ImageWidget: React.FC<WidgetProps> = ({
  id,
  value,
  required,
  onChange,
  schema,
  uiSchema,
  formContext,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [preview, setPreview] = useState(value || "");
  const title = uiSchema?.["ui:title"] || schema.title;
  const description = uiSchema?.["ui:description"] || schema.description;
  const questionNumber = uiSchema?.["ui:questionNumber"];

  // Get error message from formContext
  const fieldError = formContext?.errors?.[id];
  const errorMessage = fieldError?.__errors?.[0];
  const hasError = !!errorMessage;

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        setPreview(imageUrl);
        onChange(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

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
        {questionNumber}. {title} {required && <span className="text-red-500">*</span>}
      </motion.label>
      <motion.div
        className="relative"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <input
          type="file"
          id={id}
          accept="image/*"
          onChange={handleImageChange}
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
          className={`w-full px-4 py-3 text-xl border-b-2 focus:outline-none transition-colors duration-300 ${
            hasError
              ? "border-red-500"
              : "border-gray-300 focus:border-blue-600"
          }`}
        />
        {preview && (
          <motion.img
            src={preview}
            alt="Preview"
            className="mt-4 rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{ maxWidth: "100%", maxHeight: "200px" }}
          />
        )}
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

export default ImageWidget;
