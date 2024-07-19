import { Table, TableColumnsType } from "antd";

interface OrganisationColumnProps {
  id: string;
  name: string;
  isDisabled: boolean;
  users: {
    userId: string;
    name: string;
    role: string;
    email: string;
    isDisabled: boolean;
  }[];
}
export const OrganisationColumn: TableColumnsType<OrganisationColumnProps> = [
  Table.EXPAND_COLUMN,
  {
    title: "Department ID",
    dataIndex: "id",
    responsive: ["md"],
    key: "id",
  },
  {
    title: "Department Name",
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
];
