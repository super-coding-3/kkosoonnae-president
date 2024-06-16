import React from "react";

const Header: React.FC = () => {
  return (
    <div className="w-full h-16 bg-white flex flex-col justify-center gap-1">
      <p className="ml-7 text-sm">이효경 사장님, 반갑습니다.</p>
      <p className="ml-7 text-xs text-gray-400">매장명: 쁘띠멍</p>
    </div>
  );
};

export default Header;
