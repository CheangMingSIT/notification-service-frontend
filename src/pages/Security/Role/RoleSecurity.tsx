import { Record, RoleListDataTypes, roleListColumn } from "../../../components";

const data: RoleListDataTypes[] = [
  {
    No: 1,
    Role: "Admin",
  },
  {
    No: 2,
    Role: "User",
  },
];

export function RoleSecurity() {
  return (
    <>
      <Record columns={roleListColumn} data={data} />
    </>
  );
}
