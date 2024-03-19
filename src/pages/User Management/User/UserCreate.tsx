import { Form, useLoaderData } from "react-router-dom";
import { FormContainer, RegistrationForm } from "../../../components";
import { RoleDataType, ValidatePasswords } from "../../../util";

export function UserCreate() {
  const { data } = useLoaderData() as RoleDataType;
  return (
    <FormContainer
      Header="Create User"
      Subtitle="Create a new user"
      Linkname="User List"
    >
      <ValidatePasswords>
        <Form method="POST">
          <RegistrationForm rolelist={data} />
        </Form>
      </ValidatePasswords>
    </FormContainer>
  );
}
