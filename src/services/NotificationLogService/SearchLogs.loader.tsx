import { notificationURL } from "../../util";

export async function searchLogsLoader({ request }) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  const secretKey = url.searchParams.get("SecretKey");
  const start = url.searchParams.get("start");
  const end = url.searchParams.get("end");
  const notificationLogs = new URL(
    `${notificationURL}/v1/api/notification-system`
  );
  id && notificationLogs.searchParams.append("_id", id);
  secretKey && notificationLogs.searchParams.append("secretKey", secretKey);
  start && notificationLogs.searchParams.append("startDate", start);
  end && notificationLogs.searchParams.append("endDate", end);
  const response = await fetch(notificationLogs, {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  const data = await response.json();
  return data;
}
