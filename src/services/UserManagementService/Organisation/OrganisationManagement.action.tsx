import { redirect } from "react-router-dom";
import { ErrorDataTypes, userURL } from "../../../util";

export async function CreateOrganisationAction({ request }) {
  const error = {} as ErrorDataTypes;
  const data = await request.formData();
  const name = await data.get("organisationName");
  if (!name || name.length < 1) {
    error.statusCode = 400;
    error.message = "Organisation name is required";
    return error;
  }
  const response = await fetch(
    `${userURL}/v1/api/notification-system/createOrganisation`,
    {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    }
  );

  if (!response.ok) {
    throw new Response("Failed to create organisation", {
      status: response.status,
    });
  }
  return redirect("/UserManagement/Organisation");
}
