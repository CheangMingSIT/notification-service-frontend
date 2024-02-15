import { useRouteLoaderData } from "react-router-dom";
import { EditUser, FormContainer } from "../../../components";
import { UserSecurityLoaderData } from "../../../util";

export function UserEditSecurity() {
  const { data } = useRouteLoaderData("user-id") as UserSecurityLoaderData;
  return (
    <>
      <FormContainer Header={"User"} Subtitle={"Edit User"} Linkname={"Users"}>
        <EditUser user={data} />
      </FormContainer>
    </>
  );
}
