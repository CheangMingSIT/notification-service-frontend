import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
} from "@mui/material";
import { Form } from "react-router-dom";
import { ModalContainer } from "../..";

export function DeleteModal({ action, openDelete, handleCloseDelete }) {
  return (
    <ModalContainer open={openDelete} handleClose={handleCloseDelete}>
      <DialogTitle>Delete</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete? This can't be undone.
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
          <Form method="DELETE" action={action}>
            <Button
              type="submit"
              variant="contained"
              color="error"
              disableElevation
            >
              Delete
            </Button>
          </Form>
        </Stack>
      </DialogActions>
    </ModalContainer>
  );
}
