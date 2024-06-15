import React from "react";
import LabelTableFilter from "./LabelTableFilter";

interface TextInputTableFilterProps {
  label: string;
  placeholder: string;
}

const TextInputTableFilter: React.FC<TextInputTableFilterProps> = (props) => {
  return (
    <div className="w-fit">
      <LabelTableFilter label={props.label} />
      <input
        type="text"
        placeholder={props.placeholder}
        className="px-3 py-2 focus-visible:outline-none rounded-r-md border-2 border-COMMONN_BORDER_GRAY"
      />
    </div>
  );
};

export default TextInputTableFilter;
