import React from "react";
import { Input } from "../shard_ui/input";

interface InputLabelProps {
  label: string;
  type: string;
  placeholder: string;
  disable: boolean;
}

const InputLabel: React.FC<InputLabelProps> = (props) => {
  return (
    <div className="flex items-start">
      <label className="font-medium w-40">{props.label}</label>
      <Input
        type={props.type}
        placeholder={props.placeholder}
        className="w-96"
        disabled={props.disable}
      />
    </div>
  );
};

export default InputLabel;
