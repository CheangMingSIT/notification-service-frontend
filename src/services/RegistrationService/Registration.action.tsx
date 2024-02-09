import { json, redirect } from "react-router-dom";
import { userURL } from "../../util/Config/config";

export async function registrationAction({ request }) {
  const data = await request.formData();
  const name = await data.get("name");
  const email = data.get("email");
  const password = data.get("password");
  const confirmPassword = data.get("confirmPassword");

  if (password !== confirmPassword) {
    return json({ error: "Password does not match" }, 400);
  }
  const response = await fetch(`${userURL}/v1/api/notification-system/signUp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });
  if (!response.ok) {
    return json({ error: "Strange...." }, response.status);
  }
  return redirect("/");
}
