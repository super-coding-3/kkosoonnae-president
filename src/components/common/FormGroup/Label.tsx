import React from "react";

interface LabelProps {
  label: string;
}

const Label: React.FC<LabelProps> = (props) => {
  return <label className="font-medium w-40">{props.label}</label>;
};

export default Label;
