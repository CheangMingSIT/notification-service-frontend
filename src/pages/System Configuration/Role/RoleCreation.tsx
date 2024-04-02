import { Grid, Stack, Typography } from "@mui/material";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { Form, useLoaderData, useNavigate } from "react-router-dom";
import { StyledButton, StyledTextField } from "../../../assets/style";
import { FormContainer, PermissionListColumn } from "../../../components";
import { GroupPermissionDataTypes } from "../../../util";

export function RoleCreation() {
  const { data } = useLoaderData() as GroupPermissionDataTypes;
  const navigate = useNavigate();
  return (
    <>
      <FormContainer
        Header={"Role"}
        Subtitle={"Create Role"}
        Linkname={"Roles"}
      >
        <Form method="POST">
          <Grid container>
            <Grid item xs={12} sm={12} md={6}>
              <StyledTextField
                label={"Role"}
                name={"role"}
                autoComplete={"off"}
                required
                fullWidth
                variant={"filled"}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} />
            <Grid item xs={12} margin={"10px 0px 10px 0px"}>
              <Typography
                variant="body1"
                fontWeight={600}
                fontSize={18}
                gutterBottom
              >
                Assign Permissions
              </Typography>
              <Table
                columns={
                  PermissionListColumn as ColumnsType<{
                    resource: string;
                    permissions: { permissionId: number; operation: string }[];
                  }>
                }
                rowKey={(record) => record.resource}
                dataSource={data}
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
