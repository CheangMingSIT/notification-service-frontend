import { userURL } from "../../../util";

export async function userListLoader({ request }) {
  const url = new URL(request.url);
  const name = url.searchParams.get("user");
  const role = url.searchParams.get("role");
  const userList = new URL(
    `${userURL}/v1/api/notification-system/listUsers?page=1&limit=10`
  );
  name && userList.searchParams.append("name", name);
  role && userList.searchParams.append("role", role);
  const response = await fetch(userList, {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const data = await response.json();
  const payload: {
    userId: any;
    name: string;
    email: any;
    role: any;
    disabled: boolean;
  }[] = [];
  data.data.map((user) => {
    if (user.disabled === true) {
      payload.push({
        userId: user.userId,
        name: `${user.name} (Disabled)`,
        email: user.email,
        role: user.role,
        disabled: user.disabled,
      });
    } else {
      payload.push({
        userId: user.userId,
        name: user.name,
        email: user.email,
        role: user.role,
        disabled: user.disabled,
      });
    }
  });
  return payload;
}
