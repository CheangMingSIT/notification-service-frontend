import { Dialog, styled } from "@mui/material";

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    borderRadius: "10px",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(6),
  },
}));
