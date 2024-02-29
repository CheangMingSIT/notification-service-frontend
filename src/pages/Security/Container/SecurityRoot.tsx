import { Box, Typography, useTheme } from "@mui/material";
import { Tabs, TabsProps } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export function SecurityRoot() {
  const navigate = useNavigate();
  const location = useLocation();
  const onChange = (key: string) => {
    navigate(key);
  };
  const items: TabsProps["items"] = [
    {
      key: "/Security/Users",
      label: "Users",
    },
    {
      key: "/Security/ApiKeys",
      label: "Api Keys",
    },
  ];
  const theme = useTheme();
  return (
    <>
      <Typography variant="h3">Business System</Typography>
      <Box marginTop={theme.spacing(8)}>
        <Tabs activeKey={location.pathname} items={items} onChange={onChange} />
        <Outlet />
      </Box>
    </>
  );
}
