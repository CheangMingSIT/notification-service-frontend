import { redirect } from "react-router-dom";
import { userURL } from "../../../util";

export async function UpdateOrganisation({ request }) {
  const data = Object.fromEntries(await request.formData());
  const name = data.organisationName;
  const organisationId = data.organisationId;
  const url = new URL(
    `${userURL}/v1/api/notification-system/updateOrganisation/${organisationId}`
  );
  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });
  if (!response.ok) {
    throw new Response(response.statusText, { status: response.status });
  }
  return redirect("/UserManagement/Organisation");
}
