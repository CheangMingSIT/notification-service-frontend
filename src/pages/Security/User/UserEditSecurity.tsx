import { EditUser, FormContainer } from "../../../components";

export function UserEditSecurity() {
  return (
    <>
      <FormContainer Header={"User"} Subtitle={"Edit User"} Linkname={"Users"}>
        <EditUser />
      </FormContainer>
    </>
  );
}
