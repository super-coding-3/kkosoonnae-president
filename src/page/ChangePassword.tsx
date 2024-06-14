import BtnSubmit from "components/common/BtnSubmit";
import InputLabel from "components/common/InputLabel";
import Layout from "components/common/Layout";
import React from "react";

const ChangePassword: React.FC = () => {
  return (
    <Layout>
      <form className="flex justify-between">
        <div className="flex flex-col gap-5">
          <InputLabel
            label="현재 비밀번호"
            type="password"
            placeholder="현재 비밀번호를 입력해주세요"
            disable={false}
          />
          <InputLabel
            label="변경 비밀번호"
            type="password"
            placeholder="변경할 비밀번호를 입력해주세요"
            disable={false}
          />
          <InputLabel
            label="비밀번호 확인"
            type="password"
            placeholder="변경할 비밀번호를 재입력해주세요"
            disable={false}
          />
        </div>
        <BtnSubmit type="submit" value="변경" />
      </form>
    </Layout>
  );
};

export default ChangePassword;
