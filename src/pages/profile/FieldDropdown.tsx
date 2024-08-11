import React, { useState } from 'react';

interface FieldDropdownProps {
  label: string;
  options: string[];
  onSelect: (selectedOption: string) => void;
}

const FieldDropdown: React.FC<FieldDropdownProps> = ({ label, options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);
  const [editable, setEditable] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    onSelect(value);
  };

  return (
    <form className="max-w-sm mr-4">
      <label
        htmlFor="dropdown"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <div className="mb-5 flex items-center">
        <div className="flex w-full items-center">
          <select
            id="dropdown"
            value={selectedOption}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            disabled={!editable} // Disable dropdown when not editable
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <button
            type="button"
            className="p-0 ml-2 bg-transparent border-none cursor-pointer"
            aria-label="Edit dropdown"
            onClick={() => setEditable(true)} // Enable editing
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

export default FieldDropdown;
