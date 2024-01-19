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
        fontSize: "40px",
        color: "#404040",
      },
      h4: {
        fontWeight: 500,
        fontSize: "24px",
      },
      body2: {
        fontSize: "20px",
        fontWeight: 300,
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ConfigProvider
          theme={{
            token: {
              colorBgBase: "#ffffff",
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
          <Layout style={{ minHeight: "100vh" }}>
            <SideBarComponent />
            <Content style={{ margin: "1rem 2rem 0rem 2rem" }}>
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
