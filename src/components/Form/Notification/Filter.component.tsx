import {
  Box,
  Button,
  FormGroup,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Form } from "react-router-dom";

export function FilterForm() {
  const theme = useTheme();

  return (
    <>
      <Box margin={theme.spacing(4)}>
        <Form role="search" id="filter-logs" method="GET">
          <Stack direction="column" spacing={theme.spacing(2)}>
            <Typography variant="h5" gutterBottom>
              Filter By
            </Typography>
            <Box>
              <Typography variant="body2" fontWeight={500}>
                Notification ID
              </Typography>
              <TextField
                type="search"
                id="Id"
                name="id"
                size="small"
                multiline
                margin="dense"
                fullWidth
                placeholder="Search Notification ID"
              />
            </Box>
            <Box>
              <Typography variant="body2" fontWeight={500}>
                User ID
              </Typography>
              <TextField
                type="search"
                id="UserId"
                name="UserId"
                size="small"
                multiline
                fullWidth
                margin="dense"
                rows={2}
                placeholder="Search User ID"
              />
            </Box>
            <Box>
              <Typography variant="body2" fontWeight={500}>
                Secret Key
              </Typography>
              <TextField
                type="search"
                id="SecretKey"
                name="SecretKey"
                size="small"
                rows={2}
                fullWidth
                margin="dense"
                multiline
                placeholder="Search Secret Key"
              />
            </Box>

            <Box>
              <FormGroup>
                <Typography variant="body2" fontWeight={500}>
                  Date Range
                </Typography>
                <TextField
                  type="date"
                  id="start"
                  name="start"
                  size="small"
                  margin="dense"
                />
                <TextField
                  type="date"
                  id="end"
                  name="end"
                  size="small"
                  margin="dense"
                />
              </FormGroup>
            </Box>
            <Stack direction="row" spacing={2} justifyContent="flex-end">
              <Button
                type="reset"
                variant="text"
                disableElevation
                disableRipple
                disableFocusRipple
              >
                Reset
              </Button>
              <Button variant="contained" type="submit" disableElevation>
                Apply
              </Button>
            </Stack>
          </Stack>
        </Form>
      </Box>
    </>
  );
}
