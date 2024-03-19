import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import { roleContext } from "..";
import { CreateRolePermission, FormContainer } from "../../../components";
import { IndividualRoleDataTypes, PermissionDataTypes } from "../../../util";

export function EditRole() {
  const { data: permissioData } = useLoaderData() as PermissionDataTypes;
  const { data } = useRouteLoaderData(
    "individual-role-data"
  ) as IndividualRoleDataTypes;

  return (
    <>
      <roleContext.Provider value={permissioData}>
        <FormContainer Header="Role" Subtitle="Edit Role" Linkname="Roles">
          <CreateRolePermission
            method={"PATCH"}
            rolename={data.role}
            hasFullDataControl={data.hasFullDataControl}
            permissionList={data.permissions}
          />
        </FormContainer>
      </roleContext.Provider>
    </>
  );
}
