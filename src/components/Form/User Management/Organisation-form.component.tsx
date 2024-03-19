import { Grid, Stack, TextField, Theme, useMediaQuery } from "@mui/material";
import { Form } from "react-router-dom";
import { StyledButton } from "../../../assets/style";

export function OrganisationForm() {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  return (
    <>
      <Form method="POST">
        <Grid container spacing={5} marginBottom={8}>
          <Grid item xs={12} sm={12}>
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
          <Grid item xs={12} textAlign="right">
            <Stack
              spacing={{ xs: 0, sm: 0, md: 4 }}
              direction={{ xs: "column", sm: "column", md: "row" }}
              justifyContent="flex-end"
            >
              {isMobile ? (
                <>
                  <StyledButton
                    type="submit"
                    variant="contained"
                    disableElevation
                  >
                    Save Organisation
                  </StyledButton>
                  <StyledButton type="reset" variant="text">
                    Clear
                  </StyledButton>
                </>
              ) : (
                <>
                  <StyledButton type="reset" variant="text">
                    Clear
                  </StyledButton>
                  <StyledButton
                    type="submit"
                    name="intent"
                    value="createOrganisation"
                    variant="contained"
                    disableElevation
                  >
                    Save Organisation
                  </StyledButton>
                </>
              )}
            </Stack>
          </Grid>
        </Grid>
      </Form>
    </>
  );
}
