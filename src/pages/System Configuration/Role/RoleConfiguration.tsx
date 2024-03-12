import { useRouteLoaderData } from "react-router-dom";
import { Record, roleListColumn } from "../../../components";
import { RoleDataType } from "../../../util";

export function RoleConfiguration() {
  const data = useRouteLoaderData("role-id") as RoleDataType;
  const listOfRoles = data.data.map((role, index) => {
    return {
      no: index + 1,
      role: role.role,
    };
  });
  return (
    <>
      <Record
        showSizeChanger={true}
        columns={roleListColumn}
        data={listOfRoles}
        rowKey={(role) => role.no}
      />
    </>
  );
}
