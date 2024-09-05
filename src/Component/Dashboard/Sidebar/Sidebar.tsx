import { Layout, Menu } from "antd";
import { useAppSelector } from "../../../redux/app/hook";
import { useCurrnetUser } from "../../../redux/features/auth/authSlice";
import { SidebarGenarator } from "./SidebarGenarator";
import { AdminRoute } from "../../../Route/Admin.Route";
import { UserRoute } from "../../../Route/User.Route";
const { Sider } = Layout;
const userRole = {
  ADMIN: "admin",
  USER: "user",
};

const Sidebar = () => {
  const user = useAppSelector(useCurrnetUser);
  console.log("user", user);

  let SideberItems;
  switch (user?.role) {
    case userRole.ADMIN:
      SideberItems = SidebarGenarator(AdminRoute, userRole.ADMIN);
      break;
    case userRole.USER:
      SideberItems = SidebarGenarator(UserRoute, userRole.USER);
      break;
  }

  return (
    <div>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical " />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={SideberItems}
          className="min-h-screen"
        />
      </Sider>
    </div>
  );
};

export default Sidebar;
