import { redirect } from "react-router-dom";
import { baseURL } from "../../util/Config/config";

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
    return response.json();
  }
  const { token } = await response.json();
  localStorage.setItem("token", token);

  return redirect("/Overview");
}
