import { defer } from "react-router-dom";
import { notificationURL } from "../../util";

async function loader() {
  const fetchData = async (url) => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (response.status === 401 || response.status === 403)
      throw new Response("Unauthorized", { status: response.status });

    return response.json();
  };

  // Fetch chart data
  const fetchChartData = await fetch(
    `${notificationURL}/v1/api/notification-system/MonthlyRecord`,
    {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  if (fetchChartData.status === 401 || fetchChartData.status === 403)
    throw new Response("Unauthorized", { status: fetchChartData.status });

  const chartData = await fetchChartData.json();

  const month = chartData.data.map((item) => {
    return item.monthYear;
  });

  const countMonthData = chartData.data.map((item) => {
    return item.count;
  });
  // ------------------------------------------------------------------
  // Fetch undelivered data
  const fetchUndeliveredData = await fetch(
    `${notificationURL}/v1/api/notification-system/MonthlyUndeliveredRecord`,
    {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  if (
    fetchUndeliveredData.status === 401 ||
    fetchUndeliveredData.status === 403
  )
    throw new Response("Unauthorized", { status: fetchUndeliveredData.status });

  const undeliveredData = await fetchUndeliveredData.json();
  const undeliveredMonth = undeliveredData.data.map((item) => {
    return item.monthYear;
  });
  const undeliveredCount = undeliveredData.data.map((item) => {
    return item.count;
  });

  const [
    { count: NoOfRecord },
    { count: MessageInQueueCount },
    { count: FailedMessageCount },
  ] = await Promise.all([
    fetchData(`${notificationURL}/v1/api/notification-system/todayRecords`),
    fetchData(
      `${notificationURL}/v1/api/notification-system/todayMessageInQueue`
    ),
    fetchData(
      `${notificationURL}/v1/api/notification-system/todayFailedMessage`
    ),
  ]);
  return {
    record: NoOfRecord,
    InQueue: MessageInQueueCount,
    Fail: FailedMessageCount,
    month: month,
    countMonthData: countMonthData,
    undeliveredMonth: undeliveredMonth,
    undeliveredCount: undeliveredCount,
  };
}

export async function overviewLoader() {
  return defer({
    data: await loader(),
  });
}
