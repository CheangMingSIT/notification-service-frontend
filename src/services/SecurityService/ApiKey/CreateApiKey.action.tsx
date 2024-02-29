import { json } from "react-router-dom";
import { userURL } from "../../../util";

export async function createApiKeyAction({ request }) {
  const data = await request.formData();
  const name = data.get("name");
  const response = await fetch(
    `${userURL}/v1/api/notification-system/generateSecretKey`,
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
    return json({ error: "Strange...." }, response.status);
  }
  const responseData = await response.json();
  return responseData.secretKey;
}
