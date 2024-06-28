import BtnSubmit from "components/common/FormGroup/BtnSubmit";
import InputText from "components/common/FormGroup/InputText";
import Layout from "components/common/Layout/Layout";
import React from "react";

const ChangePassword: React.FC = () => {
  return (
    <Layout>
      <form className="h-full flex justify-between">
        <div className="flex flex-col gap-5">
          <InputText
            label="현재 비밀번호"
            type="password"
            placeholder="현재 비밀번호를 입력해주세요"
            disable={false}
          />
          <InputText
            label="변경 비밀번호"
            type="password"
            placeholder="변경할 비밀번호를 입력해주세요"
            disable={false}
          />
          <InputText
            label="비밀번호 확인"
            type="password"
            placeholder="변경할 비밀번호를 재입력해주세요"
            disable={false}
          />
        </div>
        <div className="flex items-end">
          <BtnSubmit type="submit" value="변경" />
        </div>
      </form>
    </Layout>
  );
};

export default ChangePassword;
