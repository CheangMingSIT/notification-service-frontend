import {} from "antd";
import { CreatePermission, FormContainer } from "../../../components";

export function AddPermission() {
  return (
    <>
      <FormContainer
        Header="Permission"
        Subtitle="Add Permission"
        Linkname="Permissions"
      >
        <CreatePermission />
      </FormContainer>
    </>
  );
}
