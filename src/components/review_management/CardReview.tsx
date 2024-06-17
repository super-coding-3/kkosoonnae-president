import BtnTwoWay from "components/common/FormGroup/BtnTwoWay";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoTriangleSharp } from "react-icons/io5";

interface CardReviewProps {
  status: string;
  customerImg: string;
  custorerName: string;
  score: number;
  contents: string;
  reply?: string;
}

const CardReview: React.FC<CardReviewProps> = (props) => {
  const [openReplyArea, setOpenReplyArea] = useState(false);

  const onReplyBtnClick = () => {
    setOpenReplyArea(true);
  };

  const onCancleBtnClick = () => {
    setOpenReplyArea(false);
  };

  const onSubmitBtnClick = () => {
    setOpenReplyArea(false);
  };

  return (
    <article className="flex flex-col items-center py-7 px-10 border-2 border-COMMONN_BORDER_GRAY rounded-lg">
      <h1 className="w-full text-3xl">{props.status}</h1>
      <div className="w-full flex mt-5 justify-between">
        <div className="flex items-center gap-3">
          <img
            src={props.customerImg}
            className="border-2 border-MAIN_LIGHT_COLOR rounded-full size-11"
          ></img>
          <p>{props.custorerName}</p>
        </div>
        <div className="flex items-center gap-2">
          <FaStar color="#867976" size="20px" />
          {props.score}
        </div>
      </div>
      <main className="w-11/12 my-7">{props.contents}</main>
      <section className="w-11/12">
        {props.status === "미답변 상태" && openReplyArea === false && (
          <button
            type="button"
            onClick={onReplyBtnClick}
            className="w-full h-14 bg-MAIN_COLOR text-white rounded-lg text-lg"
          >
            답변 달기
          </button>
        )}
        {props.status === "답변완료" && openReplyArea === false && (
          <div>
            <IoTriangleSharp color="#dddddd" className="ml-3 relative top-1" />
            <div className="w-full p-5 rounded-md bg-COMMONN_BORDER_GRAY">
              {props.reply}
            </div>
            <div className="w-full flex justify-end">
              <BtnTwoWay
                left_btn_value="삭제"
                left_btn_type="button"
                right_btn_value="수정"
                right_btn_type="button"
                right_btn_onClick={onReplyBtnClick}
              />
            </div>
          </div>
        )}
        {openReplyArea && (
          <form>
            <textarea className="w-full h-32 border-2 border-COMMONN_BORDER_GRAY focus-visible:border-MAIN_COLOR rounded-md" />
            <div className="w-full flex justify-end">
              <BtnTwoWay
                left_btn_value="취소"
                left_btn_type="button"
                left_btn_onClick={onCancleBtnClick}
                right_btn_value="등록"
                right_btn_type="submit"
                right_btn_onClick={onSubmitBtnClick}
              />
            </div>
          </form>
        )}
      </section>
    </article>
  );
};

export default CardReview;
