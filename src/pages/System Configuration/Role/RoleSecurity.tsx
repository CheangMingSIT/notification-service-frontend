import { useLoaderData } from "react-router-dom";
import { Record, roleListColumn } from "../../../components";
import { RoleDataType } from "../../../util";

export function RoleSecurity() {
  const data = useLoaderData() as RoleDataType;
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
