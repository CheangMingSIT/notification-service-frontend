import GroupAddIcon from "@mui/icons-material/GroupAdd";
import {
  Box,
  Grid,
  IconButton,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link, Outlet, useLocation } from "react-router-dom";
import { StyledButton } from "../../../assets/style";
export function ConfigurationRoot() {
  const location = useLocation();
  const theme = useTheme();

  const generateRole = () => {
    if (useMediaQuery(theme.breakpoints.down("md"))) {
      return (
        <Tooltip title="generate new role">
          <IconButton
            component={Link}
            to="/SystemConfiguration/Roles/Create"
            aria-label="generate new role"
            size="large"
            color="primary"
          >
            <GroupAddIcon />
          </IconButton>
        </Tooltip>
      );
    } else {
      return (
        <StyledButton
          variant="contained"
          disableElevation
          component={Link}
          to="/SystemConfiguration/Roles/Create"
          startIcon={<GroupAddIcon />}
        >
          Generate new role
        </StyledButton>
      );
    }
  };
  return (
    <>
      {location.pathname === "/SystemConfiguration/Roles" ? (
        <Grid container spacing={2}>
          <Grid item xs={6} sm={6} md={8} lg={9}>
            <Typography variant="h5" fontWeight={700}>
              RBAC
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={4} lg={3}>
            <Box textAlign="right">{generateRole()}</Box>
          </Grid>
        </Grid>
      ) : (
        <Typography variant="h3">Configuration</Typography>
      )}

      <Box marginTop={theme.spacing(8)}>
        <Outlet />
      </Box>
    </>
  );
}
