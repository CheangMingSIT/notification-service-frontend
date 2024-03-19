import {
  Checkbox,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { roleContext } from "../../pages/System Configuration";

export function PermissionList({ permissionData }) {
  const uniqueResource = useContext(roleContext);
  const [checked, setChecked] = useState<number[]>([]);
  useEffect(() => {
    setChecked(permissionData || []);
  }, [permissionData]);

  const getResourceData = () => {
    const resourceData = Array.from(
      new Set(uniqueResource.map((item) => item.resource))
    ).map((item, index) => {
      const filteredData = uniqueResource.filter(
        (data) => data.resource === item
      );
      return (
        <List
          dense
          sx={{
            width: "100%",
          }}
          key={index}
        >
          <Typography
            variant="body1"
            textTransform="capitalize"
            fontWeight={500}
          >
            {item}
          </Typography>
          <Divider sx={{ marginTop: 3, marginBottom: 3 }} />
          {filteredData.map((data) => {
            const isChecked = checked.includes(data.permissionId);
            const toggleCheckbox = () => {
              if (isChecked) {
                setChecked((prevChecked) =>
                  prevChecked.filter((id) => id !== data.permissionId)
                );
              } else {
                setChecked((prevChecked) => [
                  ...prevChecked,
                  data.permissionId,
                ]);
              }
            };
            return (
              <ListItem
                key={data.permissionId}
                secondaryAction={
                  <Checkbox
                    key={data.permissionId}
                    edge="start"
                    name="permissions"
                    value={data.permissionId}
                    checked={isChecked}
                    onChange={toggleCheckbox}
                    inputProps={{
                      "aria-labelledby": `CheckBox-${data.operation}-${data.permissionId}`,
                    }}
                  />
                }
                disablePadding
              >
                <ListItemText
                  key={data.permissionId}
                  id={`CheckBox-${data.operation}-${data.permissionId}`}
                  primary={data.operation}
                  primaryTypographyProps={{
                    variant: "body2",
                    textTransform: "capitalize",
                    gutterBottom: true,
                  }}
                />
              </ListItem>
            );
          })}
        </List>
      );
    });

    return resourceData;
  };

  return <>{getResourceData()}</>;
}
