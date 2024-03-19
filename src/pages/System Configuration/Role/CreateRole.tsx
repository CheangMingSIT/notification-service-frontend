import { useLoaderData } from "react-router-dom";
import { roleContext } from "..";
import { CreateRolePermission, FormContainer } from "../../../components";
import { PermissionDataTypes } from "../../../util";

export function CreateRole() {
  const { data } = useLoaderData() as PermissionDataTypes;

  return (
    <>
      <roleContext.Provider value={data}>
        <FormContainer Header="Role" Subtitle="Create Role" Linkname="Roles">
          <CreateRolePermission
            method={"POST"}
            rolename={null}
            hasFullDataControl={null}
            permissionList={null}
          />
        </FormContainer>
      </roleContext.Provider>
    </>
  );
}
