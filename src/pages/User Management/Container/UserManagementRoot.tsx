import AddIcon from "@mui/icons-material/Add";
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

export function UserManagementRoot() {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const generateNewOrganisation = () => {
    if (isMobile) {
      return (
        <Tooltip title="generate new organisation">
          <IconButton
            component={Link}
            to={"/UserManagement/Organisation/Create"}
            aria-label="generate new organisation"
            size="large"
            color="primary"
          >
            <AddIcon />
          </IconButton>
        </Tooltip>
      );
    } else {
      return (
        <StyledButton
          component={Link}
          to={"/UserManagement/Organisation/Create"}
          variant="contained"
          disableElevation
          startIcon={<AddIcon />}
        >
          Generate new Organisation
        </StyledButton>
      );
    }
  };
  const page = () => {
    if (location.pathname.startsWith("/UserManagement/Users")) {
      return (
        <Typography variant="h5" fontWeight={700}>
          Users
        </Typography>
      );
    } else if (location.pathname.startsWith("/UserManagement/ApiKeys")) {
      return (
        <Typography variant="h5" fontWeight={700}>
          API Keys
        </Typography>
      );
    } else if (location.pathname.startsWith("/UserManagement/Organisation")) {
      return (
        <Grid container spacing={2}>
          <Grid item xs={6} sm={6} md={8} lg={9}>
            <Typography variant="h5" fontWeight={700}>
              Organisation
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={4} lg={3} textAlign={"right"}>
            {generateNewOrganisation()}
          </Grid>
        </Grid>
      );
    }
  };

  return (
    <>
      {page()}
      <Box marginTop={theme.spacing(8)}>
        <Outlet />
      </Box>
    </>
  );
}
