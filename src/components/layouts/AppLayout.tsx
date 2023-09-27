import React, { Children } from "react";
import SiderBar from "./SiderBar";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout({ children }: any) {
  return (
    <>
      <Header />
      <div className=" mt-12 grid  grid-cols-12  ">
        <div className="col-span-12 md:col-span-11 ">{children}</div>
        <div className="col-span-1">
          <SiderBar />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AppLayout;
