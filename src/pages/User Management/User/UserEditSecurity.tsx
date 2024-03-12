import { useRouteLoaderData } from "react-router-dom";
import { EditUser, FormContainer } from "../../../components";
import { GetUserDataTypes } from "../../../util";

export function UserEditSecurity() {
  const { data } = useRouteLoaderData("user-id") as GetUserDataTypes;
  return (
    <>
      <FormContainer Header={"User"} Subtitle={"Edit User"} Linkname={"Users"}>
        <EditUser user={data} />
      </FormContainer>
    </>
  );
}
