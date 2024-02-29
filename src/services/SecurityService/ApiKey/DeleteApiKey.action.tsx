import { json, redirect } from "react-router-dom";
import { userURL } from "../../../util";

export async function deleteApiKeyAction({ params }) {
  const id = params.id;
  const response = await fetch(
    `${userURL}/v1/api/notification-system/deleteApiKey/${id}`,
    {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  if (!response.ok) {
    return json({ error: "Strange...." }, response.status);
  }
  return redirect("/Security/ApiKeys");
}
