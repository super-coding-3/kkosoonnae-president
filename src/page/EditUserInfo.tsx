import React from "react";
import Layout from "components/common/Layout/Layout";
import InputText from "components/common/FormGroup/InputText";
import BtnTwoWay from "components/common/FormGroup/BtnTwoWay";

const EditUserInfo: React.FC = () => {
  return (
    <Layout>
      <form className="h-full flex justify-between">
        <div className="flex flex-col gap-5">
          <InputText
            label="아이디"
            type="text"
            placeholder="test1"
            disable={true}
          />
          <InputText
            label="담당자명"
            type="text"
            placeholder="홍길동"
            disable={false}
          />
          <InputText
            label="이메일"
            type="email"
            placeholder="test@test.com"
            disable={false}
          />
          <InputText
            label="전화번호"
            type="tel"
            placeholder="010-0000-0000"
            disable={false}
          />
        </div>
        <div className="flex items-end">
          <BtnTwoWay
            left_btn_type="button"
            right_btn_type="submit"
            left_btn_value="초기화"
            right_btn_value="수정"
          />
        </div>
      </form>
    </Layout>
  );
};

export default EditUserInfo;
