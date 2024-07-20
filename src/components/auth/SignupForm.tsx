import React,{ useState } from "react";

import InputTextWithButton from "components/common/FormGroup/InputTextWithButton";
import InputText from "components/common/FormGroup/InputText";

import BtnSubmit from "components/common/FormGroup/BtnSubmit";
import TermsText from "./TermsText";

const SignupForm: React.FC = () => {
  const handleIdCheck = () => {
    console.log("아이디 중복 확인");
  };

  const handleBusinessNumberCheck = () => {
    console.log("사업자번호 진위 확인");
  };

  return (
    <form>
      <div className="flex flex-col gap-5">
        <InputTextWithButton
          label="아이디"
          type="text"
          placeholder="아이디를 입력해주세요"
          disable={false}
          buttonText="중복 확인"
          onButtonClick={handleIdCheck}
        />
        <InputText
          label="이메일"
          type="email"
          placeholder="이메일을 입력해주세요"
          disable={false}
        />
        <InputText
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          disable={false}
        />
        <InputText
          label="비밀번호 확인"
          type="password"
          placeholder="비밀번호를 다시 한번 입력해주세요"
          disable={false}
        />
        <InputText
          label="이름"
          type="text"
          placeholder="이름을 입력해주세요"
          disable={false}
        />
        <InputText
          label="핸드폰 번호"
          type="text"
          placeholder="010-1234-1456"
          disable={false}
        />
        <InputTextWithButton
          label="사업자번호"
          type="text"
          placeholder="사업자번호 입력해주세요"
          disable={false}
          buttonText="진위 확인"
          onButtonClick={handleBusinessNumberCheck}
        />

        <TermsText />

        <div className="flex justify-center">
          <BtnSubmit type="submit" value="회원가입" />
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
