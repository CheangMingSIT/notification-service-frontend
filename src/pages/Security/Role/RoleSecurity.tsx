import { useLoaderData } from "react-router-dom";
import { Record, roleListColumn } from "../../../components";

type RoleSecurityLoaderData = {
  data: {
    role: string;
  }[];
};

export function RoleSecurity() {
  const data = useLoaderData() as RoleSecurityLoaderData;
  const listOfRoles = data.data.map((role, index) => {
    return {
      no: index + 1,
      role: role.role,
    };
  });
  return (
    <>
      <Record
        columns={roleListColumn}
        data={listOfRoles}
        rowKey={(role) => role.no}
      />
    </>
  );
}
