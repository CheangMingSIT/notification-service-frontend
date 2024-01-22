import { redirect } from "react-router-dom";
import { baseURL } from "../../util";

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
    return response.json();
  }
  return redirect("/");
}
