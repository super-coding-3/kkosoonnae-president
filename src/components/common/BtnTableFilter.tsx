import React from "react";

interface BtnTableFilterProps {
  reset_btn_onClick?: React.MouseEventHandler<HTMLButtonElement>;
  submit_btn_onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const BtnTableFilter: React.FC<BtnTableFilterProps> = (props) => {
  return (
    <div className="flex gap-2 w-64">
      <button
        type="button"
        onClick={props.reset_btn_onClick}
        className="w-1/2 px-3 py-2 text-MAIN_COLOR border-2 border-MAIN_COLOR rounded-lg"
      >
        초기화
      </button>
      <button
        type="submit"
        onClick={props.submit_btn_onClick}
        className="w-1/2 px-3 py-2 bg-MAIN_COLOR text-white rounded-lg"
      >
        검색
      </button>
    </div>
  );
};

export default BtnTableFilter;
