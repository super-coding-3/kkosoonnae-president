import React from "react";

interface ContentsProps {
  children: React.ReactNode;
}

const Contents: React.FC<ContentsProps> = ({ children }) => {
  return <main className="bg-white rounded-md h-full">{children}</main>;
};

export default Contents;
