import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { Form } from "react-router-dom";

export function LoginForm({ handleForgetPassword, incorrectPassword }) {
  return (
    <>
      <Form method="post">
        <Stack spacing={4} useFlexGap>
          <Box>
            <label htmlFor="email">
              <Typography variant="body1" gutterBottom>
                Email Address
              </Typography>
            </label>
            <TextField
              error={incorrectPassword}
              fullWidth
              required
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
            />
          </Box>
          <Box>
            <label htmlFor="password">
              <Typography variant="body1" gutterBottom>
                Password
              </Typography>
            </label>
            <TextField
              error={incorrectPassword}
              fullWidth
              required
              id="password"
              type="password"
              name="password"
              placeholder="Password"
            />
            {incorrectPassword === true ? (
              <Typography variant="body2" color="error" sx={{ marginTop: 2 }}>
                Invalid Credentials
              </Typography>
            ) : null}
          </Box>
          <Box>
            <Button
              variant="contained"
              type="submit"
              fullWidth
              disableElevation
            >
              Login
            </Button>
          </Box>
          <Box>
            <Button
              variant="text"
              type="button"
              onClick={handleForgetPassword}
              disableElevation
              disableRipple
              disableFocusRipple
              fullWidth
            >
              Forgot Password?
            </Button>
          </Box>
        </Stack>
      </Form>
    </>
  );
}
