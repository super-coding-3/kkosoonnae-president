import React from "react";

interface ContentsProps {
  children: React.ReactNode;
}

const Contents: React.FC<ContentsProps> = ({ children }) => {
  return <main className="bg-white rounded-md h-full p-7">{children}</main>;
};

export default Contents;
