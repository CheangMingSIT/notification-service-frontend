import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { ConfigProvider, Layout } from "antd";
import { Outlet } from "react-router-dom";
import { SideBarComponent } from "../../components";

const { Content } = Layout;

export function Root() {
  const theme = createTheme({
    palette: {
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
      h2: {
        fontWeight: 700,
        fontSize: "40px",
        color: "#404040",
      },
      h3: {
        fontWeight: 700,
      },
      h6: {
        fontWeight: 700,
      },
      body2: {
        fontWeight: 300,
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
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ConfigProvider
          theme={{
            token: {
              colorBgBase: "#ffffff",
              colorPrimary: "#05445E",
              colorPrimaryBg: "rgba(155, 155, 155, 0.10)",
              colorBorder: "#E5E5E5",
              fontFamily: [
                "Inter",
                "Roboto",
                "Helvetica Neue",
                "Arial",
                "sans-serif",
              ].join(","),
            },
            components: {
              Layout: {
                siderBg: "#02364B",
                triggerBg: "#012737",
              },
              Menu: {
                darkItemBg: "#02364B",
                darkItemSelectedBg: "#012737",
                itemBorderRadius: 0,
                itemMarginInline: 0,
              },
            },
          }}
        >
          <Layout style={{ minHeight: "100vh", background: "white" }}>
            <SideBarComponent />
            <Content style={{ margin: "1rem 3rem 0rem 3rem" }}>
              <main>
                <Outlet />
              </main>
            </Content>
          </Layout>
        </ConfigProvider>
      </ThemeProvider>
    </>
  );
}
