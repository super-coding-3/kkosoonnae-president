import React from "react";
import BtnSubmit from "./BtnSubmit";

interface BtnTwoWayProps {
  left_btn_type?: "submit" | "reset" | "button" | undefined;
  right_btn_type?: "submit" | "reset" | "button" | undefined;
  left_btn_value: string;
  right_btn_value: string;
  left_btn_onClick?: React.MouseEventHandler<HTMLButtonElement>;
  right_btn_onClick?: React.MouseEventHandler<HTMLButtonElement>;
  submit_active?: boolean;
}

const BtnTwoWay: React.FC<BtnTwoWayProps> = (props) => {
  return (
    <div className="flex gap-2">
      <button
        type={props.left_btn_type}
        onClick={props.left_btn_onClick}
        className={`w-48 text-MAIN_COLOR border-2 border-MAIN_COLOR h-14 rounded-lg text-lg mt-3`}
      >
        {props.left_btn_value}
      </button>
      <BtnSubmit
        type={props.right_btn_type}
        value={props.right_btn_value}
        onClick={props.right_btn_onClick}
        active={props.submit_active}
      />
    </div>
  );
};

export default BtnTwoWay;
