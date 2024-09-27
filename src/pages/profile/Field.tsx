import React, { useState } from "react";

interface FieldProps {
  label: string;
  placeholder: string;
  onClick: () => void;
  isEditable: boolean;
  value?: string; // Optional value for controlled input
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}

const Field: React.FC<FieldProps> = ({ label, placeholder, onClick, isEditable, value, onChange }) => {
  const [editable, setEditable] = useState(isEditable);

  return (
    <form className="max-w-sm mx-auto">
      <label
        htmlFor="input"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <div className="mb-5 flex items-center">
        <div className="flex w-full items-center">
          <input
            type="text"
            id="input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={placeholder}
            required
            readOnly={!editable}
            value={value} // Controlled value
            onChange={onChange} // Handle input changes
          />
          <button
            type="button"
            className="p-0 ml-2 bg-transparent border-none cursor-pointer"
            aria-label="Edit"
            onClick={() => {
              setEditable(true); // Enable editing
              onClick(); // Trigger parent click handler
            }}
          >
            <img
              src="https://static.vecteezy.com/system/resources/previews/010/332/178/original/edit-flat-color-outline-icon-free-png.png"
              alt="Edit"
              className="w-auto h-auto max-w-[20px] md:max-w-[30px] max-h-[20px] md:max-h-[30px]"
            />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Field;
