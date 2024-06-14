import React from "react";

const LoginTitle: React.FC = () => {
  return (
    <div className="text-center">
      <img
        src="img/logo/logo.svg"
        alt="로고"
        className="block w-24 mx-auto -mt-40 mb-12"
      />
      <p className="text-black text-xl mb-2">꼬순내 사장님 페이지</p>
      <h1 className="text-black text-3xl">통합 로그인</h1>
    </div>
  );
};

export default LoginTitle;
