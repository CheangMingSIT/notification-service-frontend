import { Box } from "@mui/material";
import { StyledDialog } from "../../assets/style";

export function ModalContainer({ open, handleClose, children }) {
  return (
    <>
      <StyledDialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          onSubmit: handleClose,
        }}
        fullWidth
      >
        <Box>{children}</Box>
      </StyledDialog>
    </>
  );
}
