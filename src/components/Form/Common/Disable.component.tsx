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

export function DisableModal({ action, openDisable, handleCloseDisable }) {
  return (
    <>
      <ModalContainer open={openDisable} handleClose={handleCloseDisable}>
        <DialogTitle>Disable</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to disable?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Stack spacing={4} direction="row" justifyContent="flex-end">
            <Button
              type="button"
              variant="text"
              onClick={handleCloseDisable}
              color="info"
            >
              Cancel
            </Button>
            <Form method="PATCH" action={action}>
              <Button
                type="submit"
                variant="contained"
                color="error"
                name="intent"
                value="disable"
                disableElevation
              >
                Disable
              </Button>
            </Form>
          </Stack>
        </DialogActions>
      </ModalContainer>
    </>
  );
}
