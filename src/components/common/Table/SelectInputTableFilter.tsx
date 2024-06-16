import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../shard_ui/select";
import LabelTableFilter from "./LabelTableFilter";

interface SelectInputTableFilterProps {
  label: string;
  placeholder: string;
  selectItem: Array<string>;
}

const SelectInputTableFilter: React.FC<SelectInputTableFilterProps> = (
  props
) => {
  return (
    <div className="w-fit flex">
      <LabelTableFilter label={props.label} />
      <Select>
        <SelectTrigger className="w-[180px] rounded-r-md py-5 border-2 border-COMMONN_BORDER_GRAY ">
          <SelectValue placeholder={props.placeholder} />
        </SelectTrigger>
        <SelectContent>
          {props.selectItem.map((item) => (
            <SelectItem value={item}>{item}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectInputTableFilter;
