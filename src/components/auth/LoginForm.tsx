import React, { useState } from 'react';

import useAxios from '../../hooks/useAxios';
import { useToast } from "../../hooks/useToast"

interface LoginItemType {
  loginId: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const { toast } = useToast()


  // TODO 효경 회원가입 구현 완료 전까지는 테스트계정 사용
  const [formData, setFormData] = useState<LoginItemType>({
    loginId: 'test@test.com',
    password: 'Test1234',
  });
  const { error, handleRequest , isLoading, Loading } = useAxios();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await handleRequest({
      url: '/api/president/info/login',
      method: 'POST',
      body: formData,
      setData: (data) => {
        localStorage.setItem("token", data.data.token);
        alert(data.message)
      },
    });
  };

  return (
    <form className="mt-8" onSubmit={handleSubmit}>
      {Loading}
      <div className="mb-4">
        <input
          type="text"
          name="loginId"
          value={formData.loginId}
          onChange={handleInputChange}
          className="w-full h-11 border border-COMMON_BORDER_GRAY rounded-lg pl-2"
          placeholder="아이디를 입력해주세요."
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className="w-full h-11 border border-COMMON_BORDER_GRAY rounded-lg pl-2"
          placeholder="비밀번호를 입력해주세요."
        />
      </div>
      <button
        type="submit"
        className="mt-2 w-full h-11 bg-MAIN_COLOR text-white rounded-lg"
      >
        로그인
      </button>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <p className="mt-4 text-center text-MAIN_LIGHT_COLOR">
        copyright all rights Kkosoonae
      </p>
    </form>
  );
};

export default LoginForm;