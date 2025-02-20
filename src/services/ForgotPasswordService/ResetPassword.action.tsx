import { json, redirect } from "react-router-dom";
import { userURL } from "../../util/config/config";

export async function resetPasswordAction({ request }) {
  const data = await request.formData();
  const newPassword = { password: data.get("newPassword") };
  const queryParams = new URL(request.url).searchParams;
  const token = queryParams.get("token");
  const url = new URL(`${userURL}/v1/api/notification-system/resetPassword`);
  if (!token) {
    return json({ error: "No token provided" }, 400);
  }
  url.searchParams.set("token", token);
  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPassword),
  });

  if (response.status === 400) {
    throw new Response("No user found", { status: 400 });
  }
  return redirect("/reset-successfully");
}
