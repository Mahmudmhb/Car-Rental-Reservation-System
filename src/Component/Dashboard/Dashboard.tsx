// import React from "react";
// import {
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from "@ant-design/icons";
import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../redux/app/hook";
import { useCurrnetUser } from "../../redux/features/auth/authSlice";
import Sidebar from "./Sidebar/Sidebar";

const { Content } = Layout;

// const userRoutes = ProtectedRoute.map((item) => ({
//   key: item.label,
//   label: <NavLink to={`/dashboard/${item.label}`}>{item.name}</NavLink>,
//   // path: item.label,
// }));
// switch(){
//   case(user ==="user"):
//   route

// }
// const items = [
//   UserOutlined,
//   VideoCameraOutlined,
//   UploadOutlined,
//   UserOutlined,
// ].map((icon, index) => ({
//   key: String(index + 1),
//   icon: React.createElement(icon),
//   label: `nav ${index + 1}`,
// }));

const Dashboard = () => {
  const selector = useAppSelector(useCurrnetUser);
  console.log("selector", selector);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
