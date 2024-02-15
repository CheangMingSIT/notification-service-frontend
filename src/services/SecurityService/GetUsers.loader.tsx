import { defer } from "react-router-dom";
import { userURL } from "../../util";

async function Loader(userId) {
  const user = new URL(
    `${userURL}/v1/api/notification-system/getUser/${userId}`
  );
  const response = await fetch(user, {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const data = await response.json();
  return data.data;
}

export async function GetUserLoader({ params }) {
  const userId = params.userId;
  return defer({
    data: await Loader(userId),
  });
}
