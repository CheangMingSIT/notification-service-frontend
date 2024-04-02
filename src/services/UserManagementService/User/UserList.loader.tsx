import { UserDataType, userURL } from "../../../util";

export async function userListLoader({ request }) {
  const url = new URL(request.url);
  const name = url.searchParams.get("user");
  const role = url.searchParams.get("role");
  const userList = new URL(`${userURL}/v1/api/notification-system/listUsers`);
  name && userList.searchParams.append("name", name);
  role && userList.searchParams.append("role", role);
  const response = await fetch(userList, {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  if (response.status === 403) {
    const error = await response.json();
    throw new Response(error.message, {
      status: response.status,
    });
  }
  const data: UserDataType = await response.json();
  const payload: UserDataType["data"] = [];
  data.data.map((user) => {
    if (user.isDisabled === true) {
      payload.push({
        userId: user.userId,
        name: `${user.name} (Disabled)`,
        email: user.email,
        role: user.role,
        isDisabled: user.isDisabled,
      });
    } else {
      payload.push({
        userId: user.userId,
        name: user.name,
        email: user.email,
        role: user.role,
        isDisabled: user.isDisabled,
      });
    }
  });
  return payload;
}
