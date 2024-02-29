import { defer } from "react-router-dom";
import { userURL } from "../../../util";

async function Loader() {
  const roles = new URL(`${userURL}/v1/api/notification-system/listRoles`);
  const response = await fetch(roles, {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const data = await response.json();
  return data.data;
}
export async function roleListLoader() {
  return defer({
    data: await Loader(),
  });
}
