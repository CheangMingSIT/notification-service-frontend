import {
  Box,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Form, useSubmit } from "react-router-dom";
import { StyledButton, StyledTextField } from "../../../assets/style";

export function EditOrganisationForm({
  organisationId,
  organisationName,
  condition,
  onClose,
}) {
  const [formData, setFormData] = useState({
    condition: "",
    operator: "equal",
    value: "",
  });
  const [name, setName] = useState("");

  useEffect(() => {
    if (condition) {
      setFormData(condition);
    } else {
      setFormData({
        condition: "",
        operator: "equal",
        value: "",
      });
    }
  }, [condition]);

  useEffect(() => {
    setName(organisationName);
  }, [organisationName]);

  const submit = useSubmit();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      organisationId,
      organisationName: name,
      ...formData,
    };
    submit(JSON.stringify(data), {
      method: "PATCH",
      encType: "application/json",
    });
  };
  const handleChangeCondition = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={12} md={12}>
              <Typography variant="h6" gutterBottom>
                Rename Organisation
              </Typography>
              <StyledTextField
                id="organisation"
                type="text"
                fullWidth
                name="organisationName"
                autoComplete="off"
                label="Organisation"
                size="small"
                value={name}
                onChange={handleChangeName}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Typography variant="h6">Set Conditions</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <TextField
                id="condition"
                type="text"
                fullWidth
                name="condition"
                autoComplete="off"
                label="Condition"
                size="small"
                value={formData.condition}
                onChange={handleChangeCondition}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <FormControl variant="outlined" fullWidth size="small">
                <InputLabel id="Operator">Operator</InputLabel>
                <Select
                  id="Operator"
                  labelId="Operator"
                  required
                  label="Operator"
                  name="operator"
                  value={formData.operator}
                  onChange={handleChangeCondition}
                >
                  <MenuItem key="equal" value="equal">
                    Equals
                  </MenuItem>
                  <MenuItem key="not equal" value="not equal">
                    Not Equals
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <TextField
                id="value"
                type="text"
                fullWidth
                name="value"
                autoComplete="off"
                label="Value"
                size="small"
                value={formData.value}
                onChange={handleChangeCondition}
              />
            </Grid>
            <Grid item xs={12} textAlign="right">
              <Box justifyContent="flex-end">
                <StyledButton
                  type="submit"
                  variant="contained"
                  disableElevation
                  onClick={onClose}
                >
                  Update
                </StyledButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Form>
    </>
  );
}
