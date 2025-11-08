import React from "react";

const InputField = ({ label, type = "text", name, value, placeholder, onChange }) => {
  return (
    <div className="mb-4 w-full">
      {label && (
        <label className="block text-gray-700 mb-1 text-sm font-medium">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        required
      />
    </div>
  );
};

export default React.memo(InputField);
