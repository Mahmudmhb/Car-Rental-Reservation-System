import { Outlet } from "react-router-dom";
import Header from "../../pages/Home/Header/Header";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
