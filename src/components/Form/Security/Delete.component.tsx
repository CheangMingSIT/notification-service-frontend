import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import { ModalContainer } from "../..";

export function DeleteModal({ openDelete, handleCloseDelete }) {
  return (
    <ModalContainer open={openDelete} handleClose={handleCloseDelete}>
      <DialogTitle>
        <Typography variant="h4">Delete</Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography variant="body1">
            Are you sure you want to delete? This can't be undone.
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Stack spacing={4} direction="row" justifyContent="flex-end">
          <Button
            type="button"
            variant="text"
            onClick={handleCloseDelete}
            color="info"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="error"
            disableElevation
          >
            Delete
          </Button>
        </Stack>
      </DialogActions>
    </ModalContainer>
  );
}
