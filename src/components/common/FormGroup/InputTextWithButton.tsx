import React from "react";
import { Input } from "../../shard_ui/input";
import Label from "./Label";

interface InputTextWithButtonProps {
  label: string;
  type: string;
  placeholder: string;
  disable: boolean;
  buttonText: string;
  onButtonClick: () => void;
}

const InputTextWithButton: React.FC<InputTextWithButtonProps> = ({
  label,
  type,
  placeholder,
  disable,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="flex items-start gap-2">
      <Label label={label} />
      <Input
        type={type}
        placeholder={placeholder}
        className="w-96"
        disabled={disable}
      />
      <button
        type="button"
        onClick={onButtonClick}
        className="w-20 h-10 bg-MAIN_LIGHT_COLOR text-white px-4 rounded text-xs flex justify-center items-center"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default InputTextWithButton;

