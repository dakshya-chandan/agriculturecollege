import React from "react";
import { Footer, Header, TopHeader } from "..";

const RootLayout = ({ children }) => {
  return (
    <>
      <TopHeader />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
