import { defer, json } from "react-router-dom";
import { userURL } from "../../../util";

async function Loader(roleId) {
  const roles = new URL(
    `${userURL}/v1/api/notification-system/ListRolePermission`
  );
  roleId && roles.searchParams.append("roleId", roleId);
  if (roleId) {
    const response = await fetch(roles, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (response.status === 403) {
      throw json(
        { error: "You are not authorized to view this page." },
        response.status
      );
    }

    const data = await response.json();
    return data;
  }
  return { role: "", permissions: [] };
}

export async function RolePermissionLoader({ request }) {
  const url = new URL(request.url);
  const roleId = url.searchParams.get("role");
  return defer({
    rolePermission: await Loader(roleId),
  });
}
