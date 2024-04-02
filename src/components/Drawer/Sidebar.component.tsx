import {
  HomeOutlined,
  LogoutOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { AdminPanelSettingsOutlined } from "@mui/icons-material";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return { key, icon, children, label } as MenuItem;
}

export function SideBarComponent({ role }) {
  const [collapsed, setCollapsed] = useState(true);
  const [collapsedWidth, setCollapsedWidth] = useState(80);
  const [current, setCurrent] = useState("1");
  let items: MenuItem[] = [];
  if (role === "Owner") {
    items = [
      getItem(<Link to="./Overview">Overview</Link>, "1", <HomeOutlined />),
      getItem(
        <Link to="./NotificationRecords">Notification Records</Link>,
        "2",
        <ProfileOutlined />
      ),
      // getItem(<Link to="./Analytics">Analytics</Link>, "3", <BarChartOutlined />),
      getItem("User Management", "4", <ManageAccountsOutlinedIcon />, [
        getItem(
          <Link to="./UserManagement/Organisation">Organisation</Link>,
          "4.3"
        ),
      ]),
      getItem(<Link to="./Logout">Logout</Link>, "6", <LogoutOutlined />),
    ];
  } else if (role === "Admin") {
    items = [
      getItem(<Link to="./Overview">Overview</Link>, "1", <HomeOutlined />),
      getItem(
        <Link to="./NotificationRecords">Notification Records</Link>,
        "2",
        <ProfileOutlined />
      ),
      getItem("User Management", "3", <ManageAccountsOutlinedIcon />, [
        getItem(<Link to="./UserManagement/Users">Users</Link>, "3.1"),
        getItem(<Link to="./UserManagement/ApiKeys">ApiKeys</Link>, "3.2"),
      ]),
      getItem("Configuration", "5", <AdminPanelSettingsOutlined />, [
        getItem(<Link to="./SystemConfiguration/Roles">Roles</Link>, "5.1"),
      ]),
      getItem(<Link to="./Logout">Logout</Link>, "6", <LogoutOutlined />),
    ];
  } else if (role === "Operator") {
    items = [
      getItem(<Link to="./Overview">Overview</Link>, "1", <HomeOutlined />),
      getItem(
        <Link to="./NotificationRecords">Notification Records</Link>,
        "2",
        <ProfileOutlined />
      ),
      getItem(<Link to="./Logout">Logout</Link>, "6", <LogoutOutlined />),
    ];
  }
  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <>
      <Sider
        collapsible
        breakpoint="sm"
        collapsedWidth={collapsedWidth}
        onBreakpoint={(broken) => {
          if (broken) {
            setCollapsed(true);
            setCollapsedWidth(0);
          } else {
            setCollapsedWidth(80);
          }
        }}
        theme="dark"
        collapsed={collapsed}
        onCollapse={(value, type) => {
          if (type === "clickTrigger") {
            setCollapsed(value);
          }
        }}
        width={220}
        style={{
          paddingTop: 15,
          position: "fixed",
          zIndex: 1,
          height: "100vh",
          left: 0,
        }}
      >
        <Menu
          theme="dark"
          onClick={onClick}
          selectedKeys={[current]}
          mode="inline"
          items={items}
        />
      </Sider>
    </>
  );
}
