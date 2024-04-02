import { Checkbox } from "@mui/material";
import { TableProps } from "antd";
interface PermissionListDataTypes {
  resource: string;
  permissions: {
    permissionId: number;
    operation: string;
  }[];
}
export const PermissionListColumn: TableProps<PermissionListDataTypes>["columns"] =
  [
    {
      title: "Resource",
      dataIndex: "resource",
      key: "resource",
    },
    {
      title: "Read",
      render: (record) => {
        const permission = record.permissions.find(
          (permission) => permission.operation === "read"
        );
        return (
          <Checkbox
            name="permissions"
            value={permission.permissionId}
            inputProps={{
              "aria-labelledby": `CheckBox-${permission.operation}-${permission.permissionId}`,
            }}
          />
        );
      },
    },
    {
      title: "Create",
      render: (record) => {
        const permission = record.permissions.find(
          (p) => p.operation === "create"
        );
        if (permission !== undefined) {
          return (
            <Checkbox
              name="permissions"
              value={permission.permissionId}
              inputProps={{
                "aria-labelledby": `CheckBox-${permission.operation}-${permission.permissionId}`,
              }}
            />
          );
        }
        return <Checkbox disabled />;
      },
    },
    {
      title: "Update",
      render: (record) => {
        const permission = record.permissions.find(
          (p) => p.operation === "update"
        );
        if (permission !== undefined) {
          return (
            <Checkbox
              name="permissions"
              value={permission.permissionId}
              inputProps={{
                "aria-labelledby": `CheckBox-${permission.operation}-${permission.permissionId}`,
              }}
            />
          );
        }
        return <Checkbox disabled />;
      },
    },
    {
      title: "Delete",
      render: (record) => {
        const permission = record.permissions.find(
          (p) => p.operation === "delete"
        );
        if (permission !== undefined) {
          return (
            <Checkbox
              name="permissions"
              value={permission.permissionId}
              inputProps={{
                "aria-labelledby": `CheckBox-${permission.operation}-${permission.permissionId}`,
              }}
            />
          );
        }
        return <Checkbox disabled />;
      },
    },
  ];
