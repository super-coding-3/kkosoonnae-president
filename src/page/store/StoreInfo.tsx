import BtnSubmit from "components/common/FormGroup/BtnSubmit";
import InputText from "components/common/FormGroup/InputText";
import InputSelect from "components/common/FormGroup/InputSelect";
import InputTextWithButton from "components/common/FormGroup/InputTextWithButton";
import TextArea from "components/common/FormGroup/TextArea";
import BtnTwoWay from "components/common/FormGroup/BtnTwoWay";
import Layout from "components/common/Layout/Layout";
import React from "react";

const StoreInfo: React.FC = () => {
  const storeOpenTime = ["10:00", "11:00", "12:00", "13:00", "14:00"];

  return (
    <Layout>
      <form className="h-full flex justify-between">
        <div className="flex flex-col gap-5">
          <InputText
            label="매장명"
            type="text"
            placeholder="쁘디멍멍이네"
            disable={false}
          />
          <InputText
            label="매장번호"
            type="text"
            placeholder="매장번호를 입력해주세요"
            disable={false}
          />
          <InputSelect
            label="운영시간(오픈)"
            placeholder="10:00"
            selectItem={storeOpenTime}
          />
          <InputSelect
            label="운영시간(마감)"
            placeholder="10:00"
            selectItem={storeOpenTime}
          />
          <InputTextWithButton
            label="매장이미지1(대표)"
            type="file"
            placeholder=" "
            disable={false}
            buttonText="첨부"
            onButtonClick={() => {}}
          />
          <InputTextWithButton
            label="매장이미지2"
            type="file"
            placeholder=" "
            disable={false}
            buttonText="첨부"
            onButtonClick={() => {}}
          />
          <InputTextWithButton
            label="매장이미지3"
            type="file"
            placeholder=" "
            disable={false}
            buttonText="첨부"
            onButtonClick={() => {}}
          />
          <p className="text-xs text-gray-400">
            *알림* <br />
            매장사진1은 검색페이지에서 노출됩니다.이미지의 크기는 000kb 이하로만
            업로드됩니다. <br /> 매장사진 1,2,3 등록시 매장상세페이지에
            슬라이드로 보입니다.
          </p>
          <TextArea
            label="매장소개"
            value="15년 운영중인 쁘띠멍입니다. 반려동물을 사랑하는 마음으로 단장시켜드립니다."
          />
        </div>
        <div className="flex items-end">
          <BtnTwoWay
            left_btn_type="button"
            right_btn_type="submit"
            left_btn_value="수정"
            right_btn_value="확인"
          />
        </div>
      </form>
    </Layout>
  );
};

export default StoreInfo;
