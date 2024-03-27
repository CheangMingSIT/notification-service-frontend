import { userURL } from "../../util";

export async function MenuLoader() {
  const response = await fetch(
    `${userURL}/v1/api/notification-system/getRole`,
    {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  if (!response.ok) {
    throw new Response(response.statusText, { status: response.status });
  }

  const data = await response.json();
  return data.data;
}
