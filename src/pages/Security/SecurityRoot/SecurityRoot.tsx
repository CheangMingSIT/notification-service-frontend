import { Box, Typography, useTheme } from "@mui/material";
import { Tabs, TabsProps } from "antd";
import { PermissionSecurity, RoleSecurity, UserSecurity } from "..";

export function SecurityRoot() {
  const onChange = (key: string) => {
    console.log(key);
  };
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Users",
      children: <UserSecurity />,
    },
    {
      key: "2",
      label: "Roles",
      children: <RoleSecurity />,
    },
    {
      key: "3",
      label: "Permissions",
      children: <PermissionSecurity />,
    },
    {
      key: "4",
      label: "Api Keys",
      children: "Content of Tab Pane 4",
    },
  ];
  const theme = useTheme();
  return (
    <>
      <Typography variant="h2">Security</Typography>
      <Box marginTop={theme.spacing(8)}>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </Box>
    </>
  );
}
