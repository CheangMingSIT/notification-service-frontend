import { defer } from "react-router-dom";
import { userURL } from "../../../util";

async function Loader(operation, resource) {
  const permissions = new URL(
    `${userURL}/v1/api/notification-system/listPermissions`
  );
  operation && permissions.searchParams.append("operation", operation);
  resource && permissions.searchParams.append("resource", resource);
  const response = await fetch(permissions, {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const data = await response.json();
  data.data.forEach((element, index) => {
    element.key = index + 1;
  });
  return data.data;
}
export async function permissionListLoader({ request }) {
  const url = new URL(request.url);
  const operation = url.searchParams.get("operation");
  const resource = url.searchParams.get("subject");

  return defer({
    data: await Loader(operation, resource),
  });
}
