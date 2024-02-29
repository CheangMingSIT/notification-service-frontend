import { json, redirect } from "react-router-dom";
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
  if (!response.ok) {
    return json(
      { error: "Something happen to the disable user action" },
      response.status
    );
  }
  return redirect("/Security/Users");
}
