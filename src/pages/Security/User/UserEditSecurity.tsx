import { useRouteLoaderData } from "react-router-dom";
import { EditUser, FormContainer } from "../../../components";

export function UserEditSecurity() {
  const user = useRouteLoaderData("users");
  console.log(user);
  return (
    <>
      <FormContainer Header={"User"} Subtitle={"Edit User"} Linkname={"Users"}>
        <EditUser />
      </FormContainer>
    </>
  );
}
