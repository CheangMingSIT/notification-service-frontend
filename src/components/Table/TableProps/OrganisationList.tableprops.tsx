import { TableProps } from "antd";

interface OrganisationListDataTypes {
  No: number;
  Organisation: string;
}

export const OrganisationListColumn: TableProps<OrganisationListDataTypes>["columns"] =
  [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 400,
    },
    {
      title: "Organisation",
      dataIndex: "organisation",
      key: "organisation",
    },
  ];
