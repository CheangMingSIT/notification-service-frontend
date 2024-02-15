import {
  OutlinedInputProps,
  TextField,
  TextFieldProps,
  alpha,
  styled,
} from "@mui/material";

export const StyledTextField = styled((props: TextFieldProps) => (
  <TextField
    InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    overflow: "hidden",
    borderRadius: 10,
    border: "1px solid",
    backgroundColor: "transparent",
    borderColor: theme.palette.grey[400],
    transition: theme.transitions.create([
      "border-color",
      "box-shadow",
      "background-color",
    ]),

    "&.Mui-focused": {
      backgroundColor: "transparent",
      boxShadow: `${alpha(theme.palette.grey[800], 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
}));
