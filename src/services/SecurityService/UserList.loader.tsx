import { userURL } from "../../util";

export async function userListLoader({ request }) {
  const userList = new URL(
    `${userURL}/v1/api/notification-system/listUsers?page=1&limit=10`
  );
  const response = await fetch(userList, {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const data = await response.json();
  return data;
}
