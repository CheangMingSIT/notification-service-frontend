import { BlockOutlined, EditOutlined } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import { Space } from "antd";
import { useState } from "react";
import { Link, useRouteLoaderData } from "react-router-dom";
import {
  DisableModal,
  EnableModal,
  Record,
  roleListColumn,
} from "../../../components";
import { RoleDataType } from "../../../util";

export function RoleConfiguration() {
  const data = useRouteLoaderData("role-id") as RoleDataType;
  const [openDisable, setOpenDisable] = useState(false);
  const [openEnable, setOpenEnable] = useState(false);
  const [roleId, setRoleId] = useState("");
  const listOfRoles = data.data.map((role, index) => {
    return {
      no: index + 1,
      id: role.id,
      role: role.role,
      isDisabled: role.isDisabled,
      hasFullDataControl: role.hasFullDataControl,
      rolePermission: role.rolePermission,
    };
  });
  const handleOpenDisable = (id: string) => {
    setOpenDisable(true);
    setRoleId(id);
  };
  const handleCloseDisable = () => setOpenDisable(false);

  const handleOpenEnable = (id: string) => {
    setOpenEnable(true);
    setRoleId(id);
  };
  const handleCloseEnable = () => setOpenEnable(false);

  return (
    <>
      <Record
        showSizeChanger={true}
        columns={[
          ...(roleListColumn || []),
          {
            title: "Actions",
            key: "Action",
            render: (_, record) => {
              if (record.isDisabled === false) {
                return (
                  <Space>
                    <IconButton
                      size="small"
                      component={Link}
                      to={`/SystemConfiguration/Roles/${record.id}/edit`}
                    >
                      <EditOutlined />
                    </IconButton>
                    <IconButton
                      color="error"
                      size="small"
                      onClick={() => handleOpenDisable(record.id)}
                    >
                      <BlockOutlined />
                    </IconButton>
                  </Space>
                );
              } else {
                return (
                  <Button
                    variant="text"
                    color="success"
                    size="small"
                    onClick={() => handleOpenEnable(record.id)}
                  >
                    Enable Role
                  </Button>
                );
              }
            },
          },
        ]}
        data={listOfRoles}
        rowKey={(role) => role.no}
        scrollSize={"calc(100vh - 300px)"}
      />
      <DisableModal
        openDisable={openDisable}
        handleCloseDisable={handleCloseDisable}
        action={`${roleId}/disable`}
      />

      <EnableModal
        openEnable={openEnable}
        handleCloseEnable={handleCloseEnable}
        action={`${roleId}/enable`}
      />
    </>
  );
}
