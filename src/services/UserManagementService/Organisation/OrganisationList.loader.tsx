import { defer, json } from "react-router-dom";
import { userURL } from "../../../util";

async function Loader() {
  const organisation = new URL(
    `${userURL}/v1/api/notification-system/listOrganisations`
  );
  const response = await fetch(organisation, {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  if (response.status === 403) {
    throw json("You are not authorized to view this page.", response.status);
  }
  const data = await response.json();
  return data.data;
}

export async function OrganisationList() {
  return defer({
    data: await Loader(),
  });
}
