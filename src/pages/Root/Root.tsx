import { CssBaseline, ThemeProvider } from "@mui/material";
import { ConfigProvider, Layout } from "antd";
import { Outlet } from "react-router-dom";
import { theme } from "../../assets/style";
import { SideBarComponent } from "../../components";

const { Content } = Layout;

export function Root() {
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
