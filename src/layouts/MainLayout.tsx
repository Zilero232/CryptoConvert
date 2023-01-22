import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <div className="wrapper">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
