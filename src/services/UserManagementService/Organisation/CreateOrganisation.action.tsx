import { ErrorDataTypes, userURL } from "../../../util";

export async function CreateOrganisationAction({ request }) {
  const data = await request.formData();
  const name = data.get("organisationName");
  const condition = data.get("condition");
  const operator = data.get("Operator");
  const value = data.get("value");
  const error = {} as ErrorDataTypes;
  if (name.length < 1) {
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
      body: JSON.stringify({ name, condition: { condition, operator, value } }),
    }
  );

  if (!response.ok) {
    throw response;
  }
  const responseData = await response.json();
  return responseData;
}
