import { defer } from "react-router-dom";
import { userURL } from "../../util";

async function Loader(action, subject) {
  const permissions = new URL(
    `${userURL}/v1/api/notification-system/listPermissions?page=1&limit=10`
  );
  action && permissions.searchParams.append("action", action);
  subject && permissions.searchParams.append("subject", subject);
  const response = await fetch(permissions, {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const data = await response.json();
  return data.data;
}
export async function permissionListLoader({ request }) {
  const url = new URL(request.url);
  const action = url.searchParams.get("operation");
  const subject = url.searchParams.get("subject");

  return defer({
    data: await Loader(action, subject),
  });
}
