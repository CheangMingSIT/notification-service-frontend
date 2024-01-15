import { json, redirect } from "react-router-dom";
import { baseURL } from "../../util/config/config";

export async function forgotPasswordAction({ request }) {
  const data = await request.formData();
  const email = data.get("email");
  const response = await fetch(
    `${baseURL}/v1/api/notification-system/forgotPassword`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    }
  );
  if (!response.ok) {
    return json({ error: response.statusText }, response.status);
  }
  return redirect("/");
}
