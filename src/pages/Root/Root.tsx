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
                darkSubMenuItemBg: "#012737",
                darkItemSelectedBg: "#04648A",
                itemMarginBlock: 0,
                itemMarginInline: 0,
                itemBorderRadius: 0,
              },
            },
          }}
        >
          <Layout style={{ minHeight: "100vh", background: "white" }}>
            <SideBarComponent />
            <Content style={{ margin: 0, padding: 30 }}>
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
