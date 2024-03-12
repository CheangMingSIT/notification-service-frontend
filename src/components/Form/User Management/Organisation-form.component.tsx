import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Form } from "react-router-dom";
import { StyledButton } from "../../../assets/style";

export function OrganisationForm() {
  const [operator, setOperator] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleOperatorChange = (event: SelectChangeEvent) => {
    setOperator(event.target.value);
  };
  const handleEnableChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDisabled(!event.target.checked);
  };

  return (
    <>
      <Form method="POST">
        <Grid container spacing={5} marginBottom={8}>
          <Grid item xs={12} sm={4}>
            <TextField
              id="organisationName"
              type="text"
              fullWidth
              required
              name="organisationName"
              label="Organisation Name"
              size="small"
              autoComplete="off"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Stack
              spacing={10}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="body2" fontWeight={500} paddingBottom={2}>
                Set Conditions
              </Typography>

              <FormControlLabel
                control={
                  <Checkbox size="small" onChange={handleEnableChange} />
                }
                label={<Typography variant="body2">Enable</Typography>}
              />
            </Stack>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="condition"
                  type="text"
                  fullWidth
                  disabled={disabled}
                  name="condition"
                  autoComplete="off"
                  label="Condition"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl variant="outlined" fullWidth size="small">
                  <InputLabel id="Operator">Operator</InputLabel>
                  <Select
                    id="Operator"
                    labelId="Operator"
                    required
                    disabled={disabled}
                    label="Operator"
                    name="Operator"
                    value={operator}
                    onChange={handleOperatorChange}
                  >
                    <MenuItem key="equal" value="equal">
                      Equals
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="value"
                  type="text"
                  autoComplete="off"
                  fullWidth
                  disabled={disabled}
                  name="value"
                  label="Value"
                  size="small"
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} textAlign="right">
            <Stack spacing={4} direction="row" justifyContent="flex-end">
              <StyledButton type="reset" variant="text">
                Clear
              </StyledButton>
              <StyledButton type="submit" variant="contained" disableElevation>
                Save Organisation
              </StyledButton>
            </Stack>
          </Grid>
        </Grid>
      </Form>
    </>
  );
}
