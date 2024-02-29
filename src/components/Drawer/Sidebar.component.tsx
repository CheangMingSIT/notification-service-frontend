import {
  BarChartOutlined,
  HomeOutlined,
  LogoutOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
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

export function SideBarComponent() {
  const [collapsed, setCollapsed] = useState(true);

  const items: MenuItem[] = [
    getItem(<Link to="./Overview">Overview</Link>, "1", <HomeOutlined />),
    getItem(
      <Link to="./NotificationRecords">Notification Records</Link>,
      "2",
      <ProfileOutlined />
    ),
    getItem(<Link to="./Analytics">Analytics</Link>, "3", <BarChartOutlined />),
    getItem(
      <Link to="./Security/Users">Business System Transaction</Link>,
      "4",
      <ManageAccountsOutlinedIcon />
    ),
    getItem(
      <Link to="./SystemConfiguration/Roles">System Configuration</Link>,
      "5",
      <AdminPanelSettingsOutlinedIcon />
    ),
    getItem(<Link to="./Logout">Logout</Link>, "6", <LogoutOutlined />),
  ];

  return (
    <>
      <Sider
        collapsible
        theme="dark"
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{ paddingTop: "15px" }}
      >
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
    </>
  );
}
