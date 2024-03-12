import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#05445E",
      contrastText: "#F3FEFF",
    },
    secondary: {
      main: "#004969",
    },
    info: {
      main: "#A9A9A9",
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
    fontSize: 14,
    h2: {
      fontWeight: 700,
      color: "#434343",
      fontSize: "45px",
    },
    h3: {
      fontWeight: 700,
      color: "#434343",
      fontSize: "38px",
    },
    h4: {
      fontWeight: 700,
      color: "#434343",
      fontSize: "30px",
    },
    h5: {
      fontWeight: 600,
      color: "#434343",
      fontSize: "24px",
    },
    h6: {
      fontWeight: 600,
      fontSize: "20px",
    },
    body1: {
      fontWeight: 300,
      fontSize: "16px",
    },
    subtitle1: {
      fontWeight: 200,
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "10px",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
        },
        text: {
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
        },
      },
    },
  },
  spacing: 4,
});
