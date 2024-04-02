import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  DialogTitle,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { List, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useState } from "react";
import { Form, Link, useLoaderData, useSubmit } from "react-router-dom";
import { StyledDialog } from "../../../assets/style";
import {
  DisableModal,
  EnableModal,
  OrganisationColumn,
  OrganisationForm,
} from "../../../components";
import { OrganisationUserListDataTypes } from "../../../util";
export function Organisation() {
  const { data } = useLoaderData() as OrganisationUserListDataTypes;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [organisationId, setOrganisationId] = useState("");
  const [openEditOrganisation, setOpenEditOrganisation] = useState(false);
  const [openDisable, setOpenDisable] = useState(false);
  const [openEnable, setOpenEnable] = useState(false);
  const submit = useSubmit();

  const payload = data.map((item) => {
    if (item.isDisabled === true) {
      return {
        id: item.id,
        name: `${item.name} (Disabled)`,
        isDisabled: item.isDisabled,
        users: item.users,
      };
    }
    return {
      id: item.id,
      name: item.name,
      isDisabled: item.isDisabled,
      users: item.users,
    };
  });

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
    setOpenMenuId(null);
  };

  const handleOpenEditOrganisation = (id: string) => {
    setOpenEditOrganisation(true);
    setOrganisationId(id);
    handleMenuClose();
  };
  const handleCloseEditOrganisaion = () => setOpenEditOrganisation(false);

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

  const expandRecord = (users) => {
    return (
      <>
        <Typography variant="body1" gutterBottom fontWeight={500}>
          Admin
        </Typography>
        <List
          size="small"
          dataSource={users}
          renderItem={(
            item: { userId; name; email; role; isDisabled },
            index
          ) => (
            <List.Item key={index}>
              <List.Item.Meta title={item.name} description={item.email} />
            </List.Item>
          )}
        />
      </>
    );
  };
  return (
    <>
      <Table
        pagination={{ showSizeChanger: true }}
        dataSource={payload}
        columns={[
          ...(OrganisationColumn as ColumnsType<{
            id: string;
            name: string;
            isDisabled: boolean;
            users: {
              userId: string;
              name: string;
              role: string;
              email: string;
              isDisabled: boolean;
            }[];
          }>),
          {
            title: "Actions",
            key: "Action",
            render: (record) => {
              const menuId = `menu-${record.id}`;
              return (
                <>
                  <IconButton
                    id={menuId}
                    aria-label="more"
                    aria-expanded={openMenuId === menuId ? "true" : undefined}
                    onClick={(e) => handleMenuClick(e, menuId)}
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
                      component={Link}
                      onClick={handleMenuClose}
                      to={`CreateAdmin/${record.id}`}
                    >
                      Add Admin
                    </MenuItem>
                    <MenuItem
                      onClick={() => handleOpenEditOrganisation(record.id)}
                    >
                      Edit Organisation
                    </MenuItem>
                    {record.isDisabled ? (
                      <MenuItem
                        id={`Enable-${record.id}`}
                        onClick={() => handleOpenEnable(record.id)}
                      >
                        Enable Organisation
                      </MenuItem>
                    ) : (
                      <MenuItem
                        id={`Disable-${record.id}`}
                        onClick={() => handleOpenDisable(record.id)}
                      >
                        Disable Organisation
                      </MenuItem>
                    )}
                  </Menu>
                </>
              );
            },
          },
        ]}
        rowKey={"id"}
        expandable={{
          expandedRowRender: (record) => expandRecord(record.users),
        }}
        scroll={{ y: "calc(100vh - 300px)" }}
      />
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
