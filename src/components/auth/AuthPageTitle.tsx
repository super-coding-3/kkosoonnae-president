import React from "react";

interface AuthPageTitleProps {
  subtitle: string;
  title: string;
}

const AuthPageTitle: React.FC<AuthPageTitleProps> = ({ subtitle, title }) => {
  return (
    <div className="text-center">
      <img
        src="img/logo/logo.svg"
        alt="로고"
        className="block w-24 mx-auto -mt-40 mb-12"
      />
      <p className="text-black text-xl mb-2">{subtitle}</p>
      <h1 className="text-black text-3xl mb-4">{title}</h1>
    </div>
  );
};

export default AuthPageTitle;
