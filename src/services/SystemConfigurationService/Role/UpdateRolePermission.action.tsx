import { redirect } from "react-router-dom";
import { userURL } from "../../../util";

export async function UpdateRolePermissionAction({ request, params }) {
  const data = await request.formData();
  const role = data.get("role");
  const permission = data.getAll("permissions");
  const organisationDataAccess = data.get("dataAccess");
  const hasFullDataControl = organisationDataAccess !== null;
  const roleId = params.roleId;
  const response = await fetch(
    `${userURL}/v1/api/notification-system/updateRolePermission/${roleId}`,
    {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role, hasFullDataControl, permission }),
    }
  );

  if (response.status === 401 || response.status === 403) {
    throw new Response("Unauthorized to update role permission", {
      status: response.status,
    });
  }

  return redirect("/SystemConfiguration/Roles");
}
