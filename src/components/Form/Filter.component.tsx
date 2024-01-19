import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Form } from "react-router-dom";

export function FilterForm() {
  return (
    <>
      <Form>
        <Stack direction="column" spacing={2}>
          <TextField
            type="email"
            id="Recipient"
            name="Recipient"
            size="small"
            placeholder="Recipient"
          />
          <TextField
            type="email"
            id="Sender"
            name="Sender"
            size="small"
            placeholder="Sender"
          />
          <Typography variant="body1">Channel</Typography>
          <div
            style={{
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
          </div>
          <Typography variant="body1">Status</Typography>
          <div
            style={{
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
          </div>
          <Typography variant="body1">Date Range</Typography>
          <TextField type="date" id="start" name="start" size="small" />
          <TextField type="date" id="end" name="end" size="small" />
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button variant="text">Reset</Button>
            <Button variant="contained" type="submit">
              Filter
            </Button>
          </Stack>
        </Stack>
      </Form>
    </>
  );
}
