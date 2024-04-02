import AddIcon from "@mui/icons-material/Add";
import {
  FormControl,
  FormLabel,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { StyledButton } from "../../../assets/style";
import { PasswordValidationContext } from "../../../util";
export function RegistrationForm({ rolelist }) {
  const {
    handlePasswordChange,
    handleConfirmPasswordChange,
    passwordsMatch,
    passwordStrength,
  } = useContext(PasswordValidationContext);

  const [role, setRole] = useState("");
  const handleRoleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value);
  };
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={12}>
          <FormLabel htmlFor="email">
            <Typography variant="subtitle2" gutterBottom>
              Email
            </Typography>
          </FormLabel>
          <TextField
            id="email"
            type="email"
            name="email"
            required
            autoComplete="off"
            placeholder="Email"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <FormLabel htmlFor="name">
            <Typography variant="subtitle2" gutterBottom>
              Username
            </Typography>
          </FormLabel>
          <TextField
            type="text"
            name="name"
            id="name"
            required
            autoComplete="off"
            placeholder="Username"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          {rolelist && rolelist.length > 0 && (
            <>
              <FormLabel htmlFor="role">
                <Typography variant="subtitle2" gutterBottom>
                  Role
                </Typography>
              </FormLabel>
              <FormControl variant="outlined" fullWidth required>
                <Select
                  id="role"
                  labelId="role"
                  name="role"
                  displayEmpty
                  onChange={handleRoleChange}
                  value={role}
                  inputProps={{ "aria-label": "without-label" }}
                >
                  <MenuItem value={""} disabled>
                    Select Role
                  </MenuItem>
                  {rolelist.map((role) => (
                    <MenuItem key={role.id} value={role.id}>
                      {role.role}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </>
          )}
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <FormLabel htmlFor="password">
            <Typography variant="subtitle2" gutterBottom>
              Password
            </Typography>
          </FormLabel>
          <TextField
            id="password"
            placeholder="Password"
            fullWidth
            required
            type="password"
            autoComplete="new-password"
            name="password"
            error={!passwordsMatch}
            onChange={handlePasswordChange}
          />
          <Typography
            padding={2}
            variant="caption"
            color={
              passwordStrength === "Weak"
                ? "error"
                : passwordStrength === "Medium"
                ? "text.secondary"
                : "green"
            }
          >
            Password Strength: {passwordStrength}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <FormLabel htmlFor="confirmPassword">
            <Typography variant="subtitle2" gutterBottom>
              Confirm Password
            </Typography>
          </FormLabel>
          <TextField
            id="confirmPassword"
            placeholder="Confirm Password"
            fullWidth
            required
            autoComplete="new-password"
            type="password"
            name="confirmPassword"
            error={!passwordsMatch}
            helperText={
              !passwordsMatch ? "Both password didn't match" : undefined
            }
            onChange={handleConfirmPasswordChange}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} textAlign="right">
          <StyledButton
            variant="contained"
            type="submit"
            disableElevation
            startIcon={<AddIcon />}
            disabled={!passwordsMatch || passwordStrength === "Weak"}
          >
            Register
          </StyledButton>
        </Grid>
      </Grid>
    </>
  );
}
