import { redirect } from "react-router-dom";
import { userURL } from "../../../util";

export async function ToggleRoleStatusAction({ request, params }) {
  const roleId = params.roleId;
  let formData = await request.formData();
  let intent = formData.get("intent");
  if (intent === "disable") {
    const response = await fetch(
      `${userURL}/v1/api/notification-system/disableRolePermission/${roleId}`,
      {
        method: "PATCH",
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw response;
    }
    return redirect("/SystemConfiguration/Roles");
  } else if (intent === "enable") {
    const response = await fetch(
      `${userURL}/v1/api/notification-system/enableRolePermission/${roleId}`,
      {
        method: "PATCH",
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw response;
    }
    return redirect("/SystemConfiguration/Roles");
  }
}
