import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
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
      <Form>
        <Stack direction="column" spacing={theme.spacing(4)}>
          <TextField
            type="email"
            id="Recipient"
            name="Recipient"
            size="small"
            multiline
            placeholder="Recipient"
          />
          <TextField
            type="email"
            id="Sender"
            name="Sender"
            size="small"
            multiline
            placeholder="Sender"
          />
          <Box>
            <Typography variant="body1" gutterBottom>
              Channel
            </Typography>
            <Box
              sx={{
                backgroundColor: "rgba(155, 155, 155, 0.10)",
                borderRadius: "10px",
                padding: "0.2rem",
              }}
            >
              <FormGroup
                style={{ justifyContent: "center", paddingLeft: "1rem" }}
              >
                <FormControlLabel control={<Checkbox />} label="SMS" />
                <FormControlLabel control={<Checkbox />} label="Email" />
              </FormGroup>
            </Box>
          </Box>
          <Box>
            <Typography variant="body1" gutterBottom>
              Status
            </Typography>
            <Box
              sx={{
                backgroundColor: "rgba(155, 155, 155, 0.10)",
                borderRadius: "10px",
                padding: "0.2rem",
              }}
            >
              <FormGroup
                style={{ justifyContent: "center", paddingLeft: "1rem" }}
              >
                <FormControlLabel control={<Checkbox />} label="Success" />
                <FormControlLabel control={<Checkbox />} label="Queuing" />
                <FormControlLabel control={<Checkbox />} label="Fail" />
              </FormGroup>
            </Box>
          </Box>
          <Box>
            <FormGroup>
              <Typography variant="body1">Date Range</Typography>
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
    </>
  );
}
