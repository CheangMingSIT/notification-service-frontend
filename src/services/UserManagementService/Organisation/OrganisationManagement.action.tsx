import { ErrorDataTypes, userURL } from "../../../util";

export async function CreateOrganisationAction({ request }) {
  const method = request.method;
  const error = {} as ErrorDataTypes;
  if (method === "POST") {
    const data = await request.formData();
    const name = await data.get("organisationName");
    if (!name || name.length < 1) {
      error.statusCode = 400;
      error.message = "Organisation name is required";
      return error;
    }
    const response = await fetch(
      `${userURL}/v1/api/notification-system/createOrganisation`,
      {
        method: "POST",
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      }
    );

    if (!response.ok) {
      throw response;
    }
    return await response.json();
  } else if (method === "PATCH") {
    const data = await request.json();
    const organisationName = data["organisationName"];
    const organisationId = data["organisationId"];
    const condition = data["condition"];
    const operator = data["operator"];
    const value = data["value"];
    const url = new URL(
      `${userURL}/v1/api/notification-system/editCondition/${organisationId}`
    );
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: organisationName,
        condition: { condition, operator, value },
      }),
    });
    if (!response.ok) {
      throw response;
    }
    return await response.json();
  }
}
