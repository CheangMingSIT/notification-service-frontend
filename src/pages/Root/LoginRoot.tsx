import { ThemeProvider, createTheme } from "@mui/material";
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
    },
    typography: {
      fontFamily: [
        '"Inter"',
        "Roboto",
        '"Helvetica Neue"',
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
            height: "100vh",
            backgroundColor: theme.palette.background.default,
          }}
        >
          <Outlet />
        </main>
      </ThemeProvider>
    </>
  );
}
