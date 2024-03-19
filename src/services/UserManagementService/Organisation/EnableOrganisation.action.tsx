import { redirect } from "react-router-dom";
import { userURL } from "../../../util";

export async function EnableOrganisation({ params }) {
  const organisationId = params.organisationId;
  const response = await fetch(
    `${userURL}/v1/api/notification-system/enableOrganisation/${organisationId}`,
    {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    throw response;
  }
  return redirect("/UserManagement/Organisation/Create");
}
