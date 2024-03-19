import { Form } from "react-router-dom";
import { FormContainer, RegistrationForm } from "../../../components";
import { ValidatePasswords } from "../../../util";

export function OrganisationAdminSetup() {
  return (
    <FormContainer
      Header={"Admin"}
      Subtitle={"Create admin"}
      Linkname={"Organisation"}
    >
      <ValidatePasswords>
        <Form method="POST">
          <RegistrationForm rolelist={[]} />
        </Form>
      </ValidatePasswords>
    </FormContainer>
  );
}
