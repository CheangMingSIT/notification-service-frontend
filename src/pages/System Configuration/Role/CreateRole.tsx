import { FormContainer, RoleCreation } from "../../../components";

export function CreateRole() {
  return (
    <>
      <FormContainer Header="Role" Subtitle="Create Role" Linkname="Roles">
        <RoleCreation />
      </FormContainer>
    </>
  );
}
