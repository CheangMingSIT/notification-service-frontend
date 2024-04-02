import { TableProps } from "antd";

interface RoleListDataTypes {
  No: number;
  id: string;
  Role: string;
  isDisabled: boolean;
}

export const roleListColumn: TableProps<RoleListDataTypes>["columns"] = [
  {
    title: "Organisation Name",
    dataIndex: "organisationName",
    key: "organisationName",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
    render: (text, record, _) => {
      if (record.isDisabled === true) {
        return (
          <span>
            {text} {"(Disabled)"}
          </span>
        );
      } else {
        return text;
      }
    },
  },
];
