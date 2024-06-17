import React from "react";
import Label from "./Label";

interface TextAreaProps {
  label: string;
  value?: string;
  placeholder?: string;
}

const TextArea: React.FC<TextAreaProps> = (props) => {
  return (
    <div className="flex flex-col gap-3">
      <Label label={props.label} />
      <textarea
        className="w-[544px] h-24 border border-COMMONN_BORDER_GRAY rounded-md"
        value={props.value}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default TextArea;
