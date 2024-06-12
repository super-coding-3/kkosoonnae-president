import React from "react";
import Nav from "./Nav";
import ContentsTabs from "./ContentsTabs";
import Contents from "./Contents";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <Nav />
      <div className="w-full h-screen">
        <Header />
        <main className="flex flex-col gap-5 p-5 h-[92%]">
          <ContentsTabs />
          <Contents>{children}</Contents>
        </main>
      </div>
    </div>
  );
};

export default Layout;
