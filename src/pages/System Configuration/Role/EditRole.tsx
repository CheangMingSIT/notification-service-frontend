import { Checkbox, Grid, Stack } from "@mui/material";
import { Table } from "antd";
import { useState } from "react";
import {
  Form,
  useLoaderData,
  useNavigate,
  useRouteLoaderData,
} from "react-router-dom";
import { StyledButton, StyledTextField } from "../../../assets/style";
import { FormContainer } from "../../../components";
import {
  GroupPermissionDataTypes,
  IndividualRoleDataTypes,
} from "../../../util";

export function EditRole() {
  const { data: permissioData } = useLoaderData() as GroupPermissionDataTypes;
  const { data } = useRouteLoaderData(
    "individual-role-data"
  ) as IndividualRoleDataTypes;
  const navigate = useNavigate();
  const [checked, setChecked] = useState(data.permissions);
  const [roleName, setRoleName] = useState(data.role);

  const handleCheckboxChange = (permissionId) => {
    setChecked((prevChecked) => {
      if (prevChecked.includes(permissionId)) {
        return prevChecked.filter((id) => id !== permissionId);
      } else {
        return [...prevChecked, permissionId];
      }
    });
  };
  const handleRoleNameChange = (e) => {
    setRoleName(e.target.value);
  };
  return (
    <>
      <FormContainer Header="Role" Subtitle="Edit Role" Linkname="Roles">
        <Form method="PATCH">
          <Grid container>
            <Grid item xs={12} sm={12} md={6}>
              <StyledTextField
                label={"Role"}
                name={"role"}
                autoComplete={"off"}
                required
                fullWidth
                variant={"filled"}
                value={roleName}
                onChange={handleRoleNameChange}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} />
            <Grid item xs={12} margin={"10px 0px 10px 0px"}>
              <Table
                columns={[
                  {
                    title: "Resource",
                    dataIndex: "resource",
                    key: "resource",
                  },
                  {
                    title: "Read",
                    render: (record) => {
                      const permission = record.permissions.find(
                        (permission) => permission.operation === "read"
                      );
                      return (
                        <Checkbox
                          name="permissions"
                          value={permission.permissionId}
                          checked={checked.includes(permission.permissionId)}
                          onChange={() =>
                            handleCheckboxChange(permission.permissionId)
                          }
                          inputProps={{
                            "aria-labelledby": `CheckBox-${permission.operation}-${permission.permissionId}`,
                          }}
                        />
                      );
                    },
                  },
                  {
                    title: "Create",
                    render: (record) => {
                      const permission = record.permissions.find(
                        (permission) => permission.operation === "create"
                      );

                      if (permission !== undefined) {
                        return (
                          <Checkbox
                            name="permissions"
                            value={permission.permissionId}
                            checked={checked.includes(permission.permissionId)}
                            onChange={() =>
                              handleCheckboxChange(permission.permissionId)
                            }
                            inputProps={{
                              "aria-labelledby": `CheckBox-${permission.operation}-${permission.permissionId}`,
                            }}
                          />
                        );
                      }
                      return <Checkbox disabled />;
                    },
                  },
                  {
                    title: "Update",
                    render: (record) => {
                      const permission = record.permissions.find(
                        (p) => p.operation === "update"
                      );

                      if (permission !== undefined) {
                        return (
                          <Checkbox
                            name="permissions"
                            value={permission.permissionId}
                            checked={checked.includes(permission.permissionId)}
                            onChange={() =>
                              handleCheckboxChange(permission.permissionId)
                            }
                            inputProps={{
                              "aria-labelledby": `CheckBox-${permission.operation}-${permission.permissionId}`,
                            }}
                          />
                        );
                      }
                      return <Checkbox disabled />;
                    },
                  },
                  {
                    title: "Delete",
                    render: (record) => {
                      const permission = record.permissions.find(
                        (p) => p.operation === "delete"
                      );

                      if (permission !== undefined) {
                        return (
                          <Checkbox
                            name="permissions"
                            value={permission.permissionId}
                            checked={checked.includes(permission.permissionId)}
                            onChange={() =>
                              handleCheckboxChange(permission.permissionId)
                            }
                            inputProps={{
                              "aria-labelledby": `CheckBox-${permission.operation}-${permission.permissionId}`,
                            }}
                          />
                        );
                      }
                      return <Checkbox disabled />;
                    },
                  },
                ]}
                rowKey={(record) => record.resource}
                dataSource={permissioData}
                pagination={false}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} />
            <Grid item xs={12} sm={12} md={6}>
              <Stack
                spacing={4}
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
              >
                <StyledButton
                  type="submit"
                  variant="contained"
                  disableElevation
                >
                  Create
                </StyledButton>
                <StyledButton type="button" onClick={() => navigate(-1)}>
                  Cancel
                </StyledButton>
              </Stack>
            </Grid>
          </Grid>
        </Form>
      </FormContainer>
    </>
  );
}
