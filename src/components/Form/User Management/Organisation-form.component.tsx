import { SaveAlt } from "@mui/icons-material";
import { DialogActions, DialogContent } from "@mui/material";
import { StyledButton, StyledTextField } from "../../../assets/style";

export function OrganisationForm({ closeCreate }) {
  return (
    <>
      <DialogContent>
        <StyledTextField
          id="organisationName"
          type="text"
          fullWidth
          required
          variant="filled"
          name="organisationName"
          label="Organisation Name"
          autoComplete="off"
        />
      </DialogContent>
      <DialogActions>
        <StyledButton type="button" variant="text" onClick={closeCreate}>
          Cancel
        </StyledButton>
        <StyledButton
          type="submit"
          variant="contained"
          disableElevation
          startIcon={<SaveAlt />}
          onClick={closeCreate}
        >
          Save
        </StyledButton>
      </DialogActions>
    </>
  );
}
