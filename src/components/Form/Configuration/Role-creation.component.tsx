import { Stack, Typography } from "@mui/material";
import { Col, Row } from "antd";
import { Form, Link, useLoaderData } from "react-router-dom";
import { CreateRoleColumn, ExpandableRecord } from "../..";
import { StyledButton, StyledTextField } from "../../../assets/style";
import { PermissionDataTypes } from "../../../util";
import { CreateCondition } from "./Generate-condition.component";

export function RoleCreation() {
  const data = useLoaderData() as PermissionDataTypes;
  return (
    <>
      <Form>
        <Row gutter={[20, 30]}>
          <Col xs={24} sm={24} md={12}>
            <StyledTextField
              label="Role"
              type="text"
              name="role"
              autoComplete="off"
              fullWidth
              variant="filled"
            />
          </Col>
          <Col xs={0} sm={0} md={12} />
          <Col xs={24}>
            <Typography variant="h6" gutterBottom>
              Assign Permissions
            </Typography>
            <ExpandableRecord
              columns={CreateRoleColumn}
              data={data.data}
              rowKey={(role) => role.key}
              expandedRowRender={() => <CreateCondition />}
            />
          </Col>
          <Col xs={24}>
            <Stack direction="row" spacing={6} justifyContent="flex-end">
              <StyledButton
                variant="text"
                disableElevation
                component={Link}
                to="../SystemConfiguration/Roles"
              >
                Cancel
              </StyledButton>
              <StyledButton type="submit" variant="contained" disableElevation>
                Save
              </StyledButton>
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  );
}
