import { redirect } from "react-router-dom";
import { userURL } from "../../../util";

export async function CreateOrganisationAdminAction({ request, params }) {
  const data = Object.fromEntries(await request.formData());
  const email = data.email;
  const name = data.name;
  const password = data.password;
  const organisationId = params.organisationId;
  const url = new URL(
    `${userURL}/v1/api/notification-system/AdminOrganisationSetup`
  );

  const response = await fetch(url, {
    method: "POST",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password, organisationId }),
  });

  if (!response.ok) {
    throw new Response(response.statusText, { status: response.status });
  }
  return redirect("/UserManagement/Organisation");
}
