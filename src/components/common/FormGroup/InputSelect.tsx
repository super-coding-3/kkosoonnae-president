import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../shard_ui/select";
import React from "react";
import Label from "./Label";

interface InputSelectProps {
  label: string;
  placeholder: string;
  selectItem: string[];
}

const InputSelect: React.FC<InputSelectProps> = (props) => {
  return (
    <div className="flex items-start">
      <Label label={props.label} />
      <Select>
        <SelectTrigger className="h-10 w-96 rounded-md py-5 border border-COMMONN_BORDER_GRAY ">
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

export default InputSelect;
