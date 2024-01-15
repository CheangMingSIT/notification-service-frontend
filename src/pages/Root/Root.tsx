import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import { SideBarComponent } from "../../components/Sidebar";

export function Root() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#05445E",
        contrastText: "#AAC9CE",
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
        fontWeight: 500,
      },
      h3: {
        fontWeight: 700,
      },
      h4: {
        fontWeight: 700,
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <SideBarComponent />

          <Box component="main" sx={{ bgcolor: "background.default", p: 3 }}>
            <main>
              <Outlet />
            </main>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}
