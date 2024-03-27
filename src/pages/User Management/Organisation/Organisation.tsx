import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Box,
  DialogTitle,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { List } from "antd";
import { useState } from "react";
import { Form, Link, useLoaderData, useSubmit } from "react-router-dom";
import { StyledDialog } from "../../../assets/style";
import {
  DisableModal,
  EnableModal,
  OrganisationForm,
} from "../../../components";
import { OrganisationUserListDataTypes } from "../../../util";

export function Organisation() {
  const { data } = useLoaderData() as OrganisationUserListDataTypes;
  const submit = useSubmit();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openEditOrganisation, setOpenEditOrganisation] = useState(false);

  const [openDisable, setOpenDisable] = useState(false);
  const [openEnable, setOpenEnable] = useState(false);
  const [organisationId, setOrganisationId] = useState("");
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const handleMenuClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    menuId: string
  ) => {
    if (openMenuId === menuId) {
      setOpenMenuId(null);
    } else {
      setOpenMenuId(menuId);
      setAnchorEl(event.currentTarget);
    }
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenuId(null); // Close the menu by resetting openMenuId
  };
  const handleOpenEditOrganisation = (id: string) => {
    setOpenEditOrganisation(true);
    setOrganisationId(id);
    handleMenuClose();
  };

  const handleCloseEditOrganisaion = () => setOpenEditOrganisation(false);

  const handleSubmitEditOrganisation = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData) as Record<string, string>;
    const organisationName = data.organisationName;
    submit(
      {
        organisationName,
        organisationId,
      },
      { method: "PATCH" }
    );
  };

  const handleOpenDisable = (id: string) => {
    setOpenDisable(true);
    setOrganisationId(id);
    handleMenuClose();
  };
  const handleCloseDisable = () => {
    setOpenDisable(false);
    setOrganisationId("");
  };

  const handleOpenEnable = (id) => {
    setOpenEnable(true);
    setOrganisationId(id);
    handleMenuClose();
  };
  const handleCloseEnable = () => {
    setOpenEnable(false);
    setOrganisationId("");
  };

  const header = (organisation, index) => {
    const menuId = `organisation-menu-${organisation.id}-${index}`;
    return (
      <>
        <Box
          key={organisation.id}
          display="flex"
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h6" fontWeight={700}>
            {organisation.name} {organisation.isDisabled ? "(Disabled)" : null}
          </Typography>
          <IconButton
            aria-label="more"
            id={menuId}
            aria-expanded={openMenuId === menuId ? "true" : undefined}
            onClick={(event) => handleMenuClick(event, menuId)}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id={menuId}
            anchorEl={anchorEl}
            open={openMenuId === menuId}
            onClose={handleMenuClose}
          >
            <MenuItem
              id={`AddAdmin-${organisation.id}`}
              component={Link}
              onClick={handleMenuClose}
              to={`CreateAdmin/${organisation.id}`}
            >
              Add Admin
            </MenuItem>
            <MenuItem
              id={`EditOrganisation-${organisation.id}`}
              onClick={() => handleOpenEditOrganisation(organisation.id)}
            >
              Edit Organisation
            </MenuItem>
            {organisation.isDisabled ? (
              <MenuItem
                id={`Enable-${organisation.id}`}
                onClick={() => handleOpenEnable(organisation.id)}
              >
                Enable {organisation.name}
              </MenuItem>
            ) : (
              <MenuItem
                id={`Disable-${organisation.id}`}
                onClick={() => handleOpenDisable(organisation.id)}
              >
                Disable {organisation.name}
              </MenuItem>
            )}
          </Menu>
        </Box>
      </>
    );
  };
  return (
    <>
      {data.map((organisation, index) => {
        return (
          <List
            id={organisation.id}
            rowKey={(item) => item.userId}
            header={header(organisation, index)}
            bordered
            style={{ marginBottom: "20px" }}
            dataSource={organisation.users}
            renderItem={(user, index) => (
              <List.Item key={index}>
                <List.Item.Meta
                  title={
                    <Typography variant="subtitle2" fontWeight={600}>
                      {user.name} ({user.role})
                    </Typography>
                  }
                  description={
                    <Typography variant="subtitle2">{user.email}</Typography>
                  }
                />
              </List.Item>
            )}
          />
        );
      })}
      <StyledDialog
        open={openEditOrganisation}
        onClose={handleCloseEditOrganisaion}
        fullWidth
      >
        <Form method="PATCH" onSubmit={handleSubmitEditOrganisation}>
          <DialogTitle>Edit Organisation</DialogTitle>
          <OrganisationForm closeCreate={handleCloseEditOrganisaion} />
        </Form>
      </StyledDialog>
      <DisableModal
        action={`${organisationId}/disable`}
        openDisable={openDisable}
        handleCloseDisable={handleCloseDisable}
      />
      <EnableModal
        action={`${organisationId}/enable`}
        openEnable={openEnable}
        handleCloseEnable={handleCloseEnable}
      />
    </>
  );
}
