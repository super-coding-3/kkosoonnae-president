import React from "react";
import { Input } from "../../shard_ui/input";
import Label from "./Label";

interface InputTextProps {
  label: string;
  type: string;
  placeholder: string;
  disable: boolean;
}

const InputText: React.FC<InputTextProps> = (props) => {
  return (
    <div className="flex items-start  gap-2">
      <Label label={props.label} />
      <Input
        type={props.type}
        placeholder={props.placeholder}
        className="w-96"
        disabled={props.disable}
      />
    </div>
  );
};

export default InputText;
