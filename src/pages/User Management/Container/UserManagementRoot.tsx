import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  DialogTitle,
  Grid,
  IconButton,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Form, Outlet, useLocation } from "react-router-dom";
import { StyledButton, StyledDialog } from "../../../assets/style";
import { OrganisationForm } from "../../../components";

export function UserManagementRoot() {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [openCreate, setOpenCreate] = useState(false);

  const handleOpenCreate = () => setOpenCreate(true);
  const handleCloseCreate = () => setOpenCreate(false);
  const generateNewOrganisation = (isMobile) => {
    return isMobile ? (
      <Tooltip title="Create organisation">
        <IconButton
          aria-label="generate new organisation"
          size="large"
          color="primary"
        >
          <AddIcon />
        </IconButton>
      </Tooltip>
    ) : (
      <StyledButton
        variant="contained"
        disableElevation
        onClick={handleOpenCreate}
        startIcon={<AddIcon />}
      >
        Create Organisation
      </StyledButton>
    );
  };

  const page = () => {
    switch (true) {
      case location.pathname.startsWith("/UserManagement/Users"):
        return (
          <Typography variant="h5" fontWeight={700}>
            Users
          </Typography>
        );
      case location.pathname.startsWith("/UserManagement/ApiKeys"):
        return (
          <Typography variant="h5" fontWeight={700}>
            API Keys
          </Typography>
        );
      case location.pathname.startsWith("/UserManagement/Organisation"):
        return (
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6} md={8} lg={9}>
              <Typography variant="h5" fontWeight={700}>
                Department
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={3} textAlign={"right"}>
              {generateNewOrganisation(isMobile)}
            </Grid>
          </Grid>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {page()}
      <Box marginTop={theme.spacing(8)}>
        <Outlet />
        <StyledDialog open={openCreate} onClose={handleCloseCreate} fullWidth>
          <Form method="POST">
            <DialogTitle>Create Organisation</DialogTitle>
            <OrganisationForm closeCreate={handleCloseCreate} />
          </Form>
        </StyledDialog>
      </Box>
    </>
  );
}
