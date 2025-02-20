import { redirect } from "react-router-dom";
import { userURL } from "../../util";

export async function loginAction({ request }) {
  const data = await request.formData();
  const loginData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch(`${userURL}/v1/api/notification-system/signIn`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  });
  if (response.status === 401 || response.status === 403) return "Unauthorized";

  if (!response.ok) {
    throw new Response(response.statusText, { status: response.status });
  }

  const { token } = await response.json();
  localStorage.setItem("token", token);
  const expirationTime = new Date().getTime() + 24 * 60 * 60 * 1000;
  localStorage.setItem("expirationTime", String(expirationTime));

  return redirect("/Overview");
}
