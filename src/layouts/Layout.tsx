import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SideWrapper from "./SideWrapper";
import Root from "./Root";

type Props = {
  title?: string;
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <Root>
      <div className="flex flex-col min-h-screen relative bg-back">
        <title>{title}</title>
        <SideWrapper>
          <Header />
          <main className="w-full bg-black min-h-screen flex justify-center">
            {children}
          </main>
          <Footer />
        </SideWrapper>
      </div>
    </Root>
  );
};

export default Layout;
