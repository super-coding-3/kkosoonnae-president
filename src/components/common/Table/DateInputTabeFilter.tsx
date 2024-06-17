import React from "react";
import { DatePickerWithRange } from "../DatePickerWithRange";
import LabelTableFilter from "./LabelTableFilter";

interface DateInputTableFilterProps {
  label: string;
}

const DateInputTableFilter: React.FC<DateInputTableFilterProps> = (props) => {
  return (
    <div className="w-fit flex">
      <LabelTableFilter label={props.label} />
      <DatePickerWithRange />
    </div>
  );
};

export default DateInputTableFilter;
