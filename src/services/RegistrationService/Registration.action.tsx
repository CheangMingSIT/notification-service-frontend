import { redirect } from "react-router-dom";
import { userURL } from "../../util";

export async function registrationAction({ request }) {
  const data = await request.formData();
  const name = data.get("name");
  const email = data.get("email");
  const roleId = data.get("role");
  const password = data.get("password");
  const confirmPassword = data.get("confirmPassword");
  if (password !== confirmPassword) {
    throw new Response("Passwords do not match", { status: 400 });
  }

  if (roleId === "none") {
    throw new Response("Please select a role", { status: 400 });
  }

  const response = await fetch(`${userURL}/v1/api/notification-system/signUp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({ name, email, password, roleId }),
  });
  if (!response.ok) {
    throw new Response("Error in registration. Please try again.", {
      status: 500,
    });
  }
  return redirect("/UserManagement/Users");
}
