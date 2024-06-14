import React from "react";
import Layout from "components/common/Layout";
import InputLabel from "components/common/InputLabel";
import BtnTwoWay from "components/common/BtnTwoWay";

const EditUserInfo: React.FC = () => {
  return (
    <Layout>
      <form className="flex justify-between">
        <div className="flex flex-col gap-5">
          <InputLabel
            label="아이디"
            type="text"
            placeholder="test1"
            disable={true}
          />
          <InputLabel
            label="담당자명"
            type="text"
            placeholder="홍길동"
            disable={false}
          />
          <InputLabel
            label="이메일"
            type="email"
            placeholder="test@test.com"
            disable={false}
          />
          <InputLabel
            label="전화번호"
            type="tel"
            placeholder="010-0000-0000"
            disable={false}
          />
        </div>
        <BtnTwoWay
          left_btn_type="button"
          right_btn_type="submit"
          left_btn_value="초기화"
          right_btn_value="수정"
        />
      </form>
    </Layout>
  );
};

export default EditUserInfo;
