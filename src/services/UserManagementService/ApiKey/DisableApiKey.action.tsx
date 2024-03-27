import { redirect } from "react-router-dom";
import { userURL } from "../../../util";

export async function disableApiKeyAction({ params }) {
  const id = params.id;
  const response = await fetch(
    `${userURL}/v1/api/notification-system/disableApiKey/${id}`,
    {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  if (response.status === 403) {
    throw new Response("Forbidden", { status: 403 });
  }
  return redirect("/UserManagement/ApiKeys");
}
