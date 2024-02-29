import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { Form } from "react-router-dom";
import { ModalContainer } from "../../Container";

export function CreateApiKey({
  open,
  handleClose,
  handleOpenSecretKey,
  alertBox,
}) {
  const [name, setName] = useState("");
  const handleSubmit = () => {
    if (name.length > 0) {
      handleOpenSecretKey();
    } else {
      alertBox("error");
    }
  };
  return (
    <>
      <ModalContainer open={open} handleClose={handleClose}>
        <Form method="POST">
          <DialogTitle>Create new secret key</DialogTitle>
          <DialogContent>
            <DialogContentText>Name</DialogContentText>
            <TextField
              autoFocus
              id="name"
              type="text"
              required
              name="name"
              onChange={(e) => setName(e.target.value)}
              fullWidth
              autoComplete="off"
              size="small"
            />
          </DialogContent>
          <DialogActions>
            <Stack spacing={4} direction="row" justifyContent="flex-end">
              <Button type="button" variant="text" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                disableElevation
                onSubmit={handleSubmit}
              >
                Create
              </Button>
            </Stack>
          </DialogActions>
        </Form>
      </ModalContainer>
    </>
  );
}
