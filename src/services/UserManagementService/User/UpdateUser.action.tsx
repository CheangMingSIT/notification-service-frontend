import { redirect } from "react-router-dom";
import { userURL } from "../../../util";

export async function UpdateUserAction({ request, params }) {
  const submittedData = await request.formData();
  const userId = params.userId;
  let roleId = submittedData.get("role");
  roleId = parseInt(roleId);

  const response = await fetch(
    `${userURL}/v1/api/notification-system/updateUser/${userId}`,
    {
      method: request.method,
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ roleId }),
    }
  );
  if (response.status === 403) {
    throw new Response("You are not allowed to update user.", { status: 403 });
  }
  if (!response.ok) {
    throw new Response("Something went wrong", { status: 500 });
  }
  return redirect("/UserManagement/Users");
}
