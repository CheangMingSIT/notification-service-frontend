import { FilledInput, FilledInputProps, styled } from "@mui/material";

export const StyledDropDown = styled((props: FilledInputProps) => (
  <FilledInput disableUnderline {...props} />
))(({ theme }) => ({
  "&.MuiFilledInput-root": {
    borderRadius: 10,
    backgroundColor: "transparent",
    border: "1px solid",
    borderColor: theme.palette.grey[400],
    transition: theme.transitions.create([
      "border-color",
      "box-shadow",
      "background-color",
    ]),
    "&:focus": {
      borderRadius: 4,
      backgroundColor: "transparent",
      borderColor: theme.palette.grey[800],
    },
  },
}));
