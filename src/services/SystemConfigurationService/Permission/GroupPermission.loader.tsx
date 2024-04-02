import { defer } from "react-router-dom";
import { userURL } from "../../../util";

async function Loader() {
  const permissions = new URL(
    `${userURL}/v1/api/notification-system/groupPermissionsByResource`
  );
  const response = await fetch(permissions, {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const data = await response.json();
  return data.data;
}
export async function GroupPermission() {
  return defer({
    data: await Loader(),
  });
}
