import React from "react";

interface LabelTableFilterProps {
  label: string;
}

const LabelTableFilter: React.FC<LabelTableFilterProps> = (props) => {
  return (
    <label className="bg-COMMONN_BORDER_GRAY px-3 py-2 border-2 border-COMMONN_BORDER_GRAY rounded-l-md h-fit">
      {props.label}
    </label>
  );
};

export default LabelTableFilter;
