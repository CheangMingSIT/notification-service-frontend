import { AddCircleOutline } from "@mui/icons-material";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import { Tabs, TabsProps } from "antd";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { StyledButton } from "../../../assets/style";

const items: TabsProps["items"] = [
  {
    key: "/SystemConfiguration/Roles",
    label: "Roles",
  },
  {
    key: "/SystemConfiguration/Permissions",
    label: "Permissions",
  },
];

export function ConfigurationRoot() {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const onChange = (key: string) => {
    navigate(key);
  };

  return (
    <>
      {location.pathname === "/SystemConfiguration/Roles" ? (
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={8}>
            <Typography variant="h3">Configuration</Typography>
          </Grid>
          <Grid item xs={4}>
            <Box textAlign="right">
              <StyledButton
                variant="contained"
                disableElevation
                component={Link}
                to="/SystemConfiguration/Roles/Create"
                startIcon={<AddCircleOutline />}
              >
                Generate new role
              </StyledButton>
            </Box>
          </Grid>
        </Grid>
      ) : (
        <Typography variant="h3">Configuration</Typography>
      )}

      <Box marginTop={theme.spacing(8)}>
        <Tabs activeKey={location.pathname} items={items} onChange={onChange} />
        <Outlet />
      </Box>
    </>
  );
}
