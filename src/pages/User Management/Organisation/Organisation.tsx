import { Typography } from "@mui/material";
import { List } from "antd";
import { useLoaderData } from "react-router-dom";
import { OrganisationUserTypes } from "../../../util";
export function Organisation() {
  const { data } = useLoaderData() as OrganisationUserTypes;
  const header = (organisation) => {
    if (organisation === "undefined") {
      return (
        <Typography variant="h6" fontWeight={700} fontStyle="italic">
          No Organisation
        </Typography>
      );
    }
    return (
      <Typography variant="h6" fontWeight={700}>
        {organisation}
      </Typography>
    );
  };
  return (
    <>
      {Object.keys(data).map((organisation) => {
        return (
          <List
            header={header(organisation)}
            key={organisation}
            dataSource={data[organisation]}
            bordered
            size="small"
            style={{ marginBottom: "20px" }}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={
                    <Typography variant="body2" fontWeight={600}>
                      {item.name}
                    </Typography>
                  }
                  description={item.role}
                />
              </List.Item>
            )}
          />
        );
      })}
    </>
  );
}
