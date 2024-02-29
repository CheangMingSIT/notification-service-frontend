import { json, redirect } from "react-router-dom";
import { userURL } from "../../../util";

export async function createPermissionAction({ request }) {
  const data = await request.formData();
  const action = data.get("operation");
  const subject = data.get("subject");
  const response = await fetch(
    `${userURL}/v1/api/notification-system/createPermission`,
    {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ action, subject }),
    }
  );
  if (!response.ok) {
    return json({ error: "Strange...." }, response.status);
  }
  return redirect("/Security/Permissions");
}
