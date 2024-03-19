import { redirect } from "react-router-dom";
import { userURL } from "../../../util";

export async function DisableUserAction({ params }) {
  const userId = params.userId;
  const response = await fetch(
    `${userURL}/v1/api/notification-system/disableUser/${userId}`,
    {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  if (response.status === 403) {
    throw new Response("You are not allowed to disable user.", { status: 403 });
  }
  return redirect("/UserManagement/Users");
}
