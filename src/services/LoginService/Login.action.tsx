import { json, redirect } from "react-router-dom";
import { baseURL } from "../../util/config/config";

export async function loginAction({ request }) {
  const data = await request.formData();
  const loginData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch(`${baseURL}/v1/api/notification-system/signIn`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  });

  if (!response.ok) {
    return json({ error: response.statusText }, response.status);
  }
  const { token } = await response.json();
  localStorage.setItem("token", token);

  return redirect("/Overview");
}
