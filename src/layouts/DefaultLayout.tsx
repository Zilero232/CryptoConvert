import { Outlet } from "react-router-dom";


const DefaultLayout = () => {
  return (
    <div className="main-layout">
      <div className="wrapper">
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
