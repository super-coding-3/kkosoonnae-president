import React from "react";

const LoginForm: React.FC = () => {
  return (
    <form className="mt-8">
      <div className="mb-4">
        <input
          type="text"
          className="w-full h-11 border border-COMMONN_BORDER_GRAY rounded-lg pl-2"
          placeholder="아이디를 입력해주세요."
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          className="w-full h-11 border border-COMMONN_BORDER_GRAY rounded-lg pl-2"
          placeholder="비밀번호를 입력해주세요."
        />
      </div>
      <button
        type="submit"
        className="mt-2 w-full h-11 bg-MAIN_COLOR text-white rounded-lg "
      >
        로그인
      </button>

      <p className="mt-4 text-center text-MAIN_LIGHT_COLOR">
        copyright all rights Kkosoonase
      </p>
    </form>
  );
};

export default LoginForm;
