import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { StyledButton } from "../../../assets/style";
import {
  PermissionListColumn,
  PermissionListDataTypes,
  Record,
} from "../../../components";

const permissionData: PermissionListDataTypes[] = [
  {
    No: 1,
    Operation: "Create",
    Subject: "User",
  },
  {
    No: 2,
    Operation: "Read",
    Subject: "User",
  },
  {
    No: 3,
    Operation: "Update",
    Subject: "User",
  },
  {
    No: 4,
    Operation: "Delete",
    Subject: "User",
  },
];

export function PermissionSecurity() {
  const theme = useTheme();
  const [operation, setOperation] = useState("");
  const [Subject, setSubject] = useState("");
  const handleChangeOperation = (e: SelectChangeEvent) => {
    setOperation(e.target.value);
  };
  const handleChangeSubject = (e: SelectChangeEvent) => {
    setSubject(e.target.value);
  };

  return (
    <>
      <Stack
        direction={{ sm: "column", md: "column", lg: "row" }}
        spacing={{ xs: theme.spacing(4), sm: theme.spacing(4) }}
        justifyContent="space-between"
      >
        <Box>
          <Stack
            direction={{ sm: "column", md: "row", lg: "row" }}
            spacing={{
              xs: theme.spacing(4),
              sm: theme.spacing(2),
              md: theme.spacing(4),
            }}
          >
            <FormControl
              sx={{ width: { sm: "100%", md: "10rem%", lg: "12rem" } }}
            >
              <InputLabel htmlFor="Operation" id="Operation" size="small">
                Operation
              </InputLabel>
              <Select
                labelId="Operation"
                id="Operation"
                label="Operation"
                size="small"
                value={operation}
                onChange={handleChangeOperation}
              >
                <MenuItem value="Create">Create</MenuItem>
                <MenuItem value="Read">Read</MenuItem>
                <MenuItem value="Update">Update</MenuItem>
                <MenuItem value="Delete">Delete</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              sx={{ width: { sm: "100%", md: "12rem%", lg: "14rem" } }}
            >
              <InputLabel htmlFor="Subject" id="Subject" size="small">
                Subject
              </InputLabel>
              <Select
                labelId="Subject"
                id="Subject"
                size="small"
                value={Subject}
                onChange={handleChangeSubject}
                label="Subject"
              >
                <MenuItem value="User">Users</MenuItem>
                <MenuItem value="ApiKey">ApiKey</MenuItem>
                <MenuItem value="Notification Log">Notification Log</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Box>

        <Box>
          <StyledButton
            variant="contained"
            disableElevation
            startIcon={<AddIcon />}
            component={Link}
            to="/Security/Permissions/Add"
            sx={{ width: { xs: "100%", sm: "100%", md: "100%" } }}
          >
            Generate new permission
          </StyledButton>
        </Box>
      </Stack>
      <Box marginTop={theme.spacing(4)}>
        <Record columns={PermissionListColumn} data={permissionData} />
      </Box>
    </>
  );
}
