import {
  BarChartOutlined,
  HomeOutlined,
  LogoutOutlined,
  ProfileOutlined,
  SecurityScanOutlined,
} from "@ant-design/icons";
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
      <Link to="./Security">Security</Link>,
      "4",
      <SecurityScanOutlined />
    ),
    getItem(<Link to="./Logout">Logout</Link>, "5", <LogoutOutlined />),
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
