import "@mui/lab/themeAugmentation";
import type {} from "@mui/lab/themeAugmentation";
import { Container, ThemeProvider, createTheme } from "@mui/material";
import { Outlet } from "react-router-dom";

export function LoginRoot() {
  const theme = createTheme({
    palette: {
      mode: "light",
      background: {
        default: "#F3FEFF",
      },
      primary: {
        main: "#05445E",
        contrastText: "#F3FEFF",
      },
      secondary: {
        main: "#F3FEFF",
        contrastText: "#05445E",
      },
    },
    typography: {
      fontFamily: [
        "Inter",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "sans-serif",
      ].join(","),
      body1: {
        fontWeight: 400,
        color: "#05445E",
      },
      h4: {
        fontWeight: 700,
        color: "#05445E",
      },
      body2: {
        fontWeight: 300,
      },
    },
    spacing: 4,
    components: {
      MuiTextField: {
        defaultProps: {
          variant: "outlined",
        },
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#05445E",
              },
              "&:hover fieldset": {
                borderColor: "#05445E",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#05445E",
              },
              borderRadius: "20px",
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "30px",
          },
          text: {
            "&:hover": {
              backgroundColor: "transparent",
            },
          },
        },
      },
      MuiLoadingButton: {
        styleOverrides: {
          root: {
            "&.MuiLoadingButton-loading": {
              backgroundColor: "#05445E",
            },
          },
        },
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <main
          style={{
            display: "block",
            padding: 0,
            margin: 0,
            backgroundColor: theme.palette.background.default,
          }}
        >
          <Container fixed>
            <Outlet />
          </Container>
        </main>
      </ThemeProvider>
    </>
  );
}
