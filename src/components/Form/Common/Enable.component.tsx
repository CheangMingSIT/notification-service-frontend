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

export function EnableModal({ action, openEnable, handleCloseEnable }) {
  return (
    <>
      <ModalContainer open={openEnable} handleClose={handleCloseEnable}>
        <DialogTitle>Enable</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to enable?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Stack spacing={4} direction="row" justifyContent="flex-end">
            <Button
              type="button"
              variant="text"
              onClick={handleCloseEnable}
              color="info"
            >
              Cancel
            </Button>
            <Form method="PATCH" action={action}>
              <Button
                type="submit"
                variant="contained"
                color="success"
                disableElevation
              >
                Enable
              </Button>
            </Form>
          </Stack>
        </DialogActions>
      </ModalContainer>
    </>
  );
}
