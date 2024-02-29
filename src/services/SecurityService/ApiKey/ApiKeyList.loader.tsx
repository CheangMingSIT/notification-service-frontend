import { defer } from "react-router-dom";
import { userURL } from "../../../util";

async function Loader(name) {
  const apiKeys = new URL(
    `${userURL}/v1/api/notification-system/apiKeyRecords`
  );
  name && apiKeys.searchParams.append("name", name);
  const response = await fetch(apiKeys, {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const data = await response.json();
  return data.data;
}
export async function apiKeyListLoader({ request }) {
  const url = new URL(request.url);
  const name = url.searchParams.get("name");
  return defer({
    data: await Loader(name),
  });
}
