import { defer } from "react-router-dom";
import { notificationURL } from "../../util";

export async function searchLogsLoader({ request }) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  const secretKey = url.searchParams.get("SecretKey");
  const start = url.searchParams.get("start");
  const end = url.searchParams.get("end");
  const page = url.searchParams.get("page");
  const pageSize = url.searchParams.get("pageSize");
  const notificationLogs = new URL(
    `${notificationURL}/v1/api/notification-system`
  );
  id && notificationLogs.searchParams.append("_id", id);
  secretKey && notificationLogs.searchParams.append("secretKey", secretKey);
  start && notificationLogs.searchParams.append("startDate", start);
  end && notificationLogs.searchParams.append("endDate", end);
  page && notificationLogs.searchParams.append("page", page);
  pageSize && notificationLogs.searchParams.append("limit", pageSize);
  const response = await fetch(notificationLogs, {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  if (response.status === 403) {
    throw new Response("Forbidden to view this notification records", {
      status: response.status,
    });
  }
  const data = response.json();
  return defer({
    data: await data,
  });
}
