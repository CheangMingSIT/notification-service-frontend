import { userURL } from "../../../util";

export async function roleDropDownLoader() {
  const role = new URL(`${userURL}/v1/api/notification-system/dropDownRoles`);
  const response = await fetch(role, {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  if (!response.ok) {
    throw new Response(response.statusText, { status: response.status });
  }
  const data = await response.json();

  return data;
}
