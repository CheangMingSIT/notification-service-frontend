import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ModalContainer } from "../../Container";

export function CreateApiKey({ open, handleClose }) {
  return (
    <>
      <ModalContainer open={open} handleClose={handleClose}>
        <DialogTitle>
          <Typography variant="h5" sx={{ fontWeight: 600 }} gutterBottom>
            Create new secret key
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography variant="body1" sx={{ fontWeight: 600 }} gutterBottom>
              Name
            </Typography>
          </DialogContentText>
          <TextField autoFocus id="name" type="text" fullWidth size="small" />
        </DialogContent>
        <DialogActions>
          <Stack spacing={4} direction="row" justifyContent="flex-end">
            <Button type="button" variant="text" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" disableElevation>
              Create
            </Button>
          </Stack>
        </DialogActions>
      </ModalContainer>
    </>
  );
}
