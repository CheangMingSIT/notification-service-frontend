import { Link, Stack, Typography } from "@mui/material";
import { List } from "antd";
import { Link as RouterLink, useLoaderData } from "react-router-dom";
import { OrganisationUserListDataTypes } from "../../../util";
export function Organisation() {
  const { data } = useLoaderData() as OrganisationUserListDataTypes;
  const header = (organisation, organisationData) => {
    if (organisation === "undefined") {
      return (
        <Typography variant="h6" fontWeight={700} fontStyle="italic">
          No Organisation
        </Typography>
      );
    }
    return (
      <Stack
        spacing={2}
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography variant="h6" fontWeight={700}>
          {organisation}
        </Typography>
        <Link
          underline="hover"
          component={RouterLink}
          to={`CreateAdmin/${organisationData[0].id}`}
        >
          Add Admin
        </Link>
      </Stack>
    );
  };
  return (
    <>
      {Object.entries(data).map(([organisation, organisationData]) => (
        <List
          header={header(organisation, organisationData)}
          key={organisation}
          bordered
          size="small"
          style={{ marginBottom: "20px" }}
          dataSource={organisationData[0].users}
          renderItem={(user: { name: string; role: string; email: string }) => (
            <List.Item>
              <List.Item.Meta
                title={
                  <Typography variant="body2" fontWeight={600}>
                    {user.name} ({user.role})
                  </Typography>
                }
                description={user.email}
              />
            </List.Item>
          )}
        />
      ))}
    </>
  );
}
