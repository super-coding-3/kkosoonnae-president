import React from "react";
import { DatePicker } from "../DatePicker";
import Label from "./Label";

interface InputDatePickerProps {
  label: string;
  placeholder: string;
}

const InputDatePicker: React.FC<InputDatePickerProps> = (props) => {
  return (
    <div className="flex items-start">
      <Label label={props.label} />
      <DatePicker placeholder={props.placeholder} />
    </div>
  );
};

export default InputDatePicker;
