import { Box } from "@mui/material";
import { Form } from "react-router-dom";
import { StyledDialog } from "../../assets/style";

export function ModalContainer({ open, handleClose, children }) {
  return (
    <>
      <StyledDialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: Form,
          onSubmit: handleClose,
        }}
        fullWidth
      >
        <Box>{children}</Box>
      </StyledDialog>
    </>
  );
}
