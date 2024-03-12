import { createContext } from "react";
import { useLoaderData } from "react-router-dom";
import { CreateRolePermission, FormContainer } from "../../../components";
import { PermissionDataTypes } from "../../../util";
interface Resource {
  permissionId: number;
  resource: string;
  operation: string;
}
[];
export const roleContext = createContext<Resource[]>([]);
export function CreateRole() {
  const { data } = useLoaderData() as PermissionDataTypes;

  return (
    <>
      <roleContext.Provider value={data}>
        <FormContainer Header="Role" Subtitle="Create Role" Linkname="Roles">
          <CreateRolePermission />
        </FormContainer>
      </roleContext.Provider>
    </>
  );
}
