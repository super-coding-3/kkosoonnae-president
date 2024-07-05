import React from "react";

interface CheckboxProps {
  id: string;
  text: string;
  checked: boolean;
  onChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.FormEvent<HTMLButtonElement>
  ) => void;

  required?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  text,
  checked,
  onChange,
  required,
}) => {
  return (
    <div className="flex items-center mb-4">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        required={required}
      />
      <label
        htmlFor={id}
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {text}
      </label>
    </div>
  );
};

export default Checkbox;
