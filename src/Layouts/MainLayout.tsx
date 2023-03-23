import React, { FunctionComponent } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import Navbar from "@/components/Navbar/Navbar";
type Props = {
  children: JSX.Element;
};
const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <div className="wrapper">
        <div className="left">
          <Sidebar />
        </div>
        <div className="right">
          <Navbar />
          {/* <NavSpace /> */}
          <div className="dashpage">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
