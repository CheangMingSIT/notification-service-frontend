import { defer } from "react-router-dom";
import { userURL } from "../../../util";

async function Loader(id: number) {
  const response = await fetch(
    `${userURL}/v1/api/notification-system/getRolePermission/${id}`,
    {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  if (!response.ok) {
    return response;
  }
  const data = await response.json();
  return data.data;
}

export async function GetRoleLoader({ params }) {
  return defer({
    data: await Loader(params.roleId),
  });
}
