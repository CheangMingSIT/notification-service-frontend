import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import { ConfigProvider, Layout } from "antd";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { theme } from "../../assets/style";
import { SideBarComponent } from "../../components";

const { Content } = Layout;

export function Root() {
  const data = useLoaderData();
  const navigate = useNavigate();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  let siderMarginLeft = 80;
  if (sm) {
    siderMarginLeft = 0;
  }
  const token = localStorage.getItem("token");
  const expirationTime = localStorage.getItem("expirationTime");
  if (token !== null && expirationTime !== null) {
    const currentTime = new Date().getTime();
    if (currentTime > Number(expirationTime)) {
      localStorage.removeItem("token");
      localStorage.removeItem("expirationTime");
      navigate("/");
    }
  }

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
          <Layout hasSider style={{ minHeight: "100vh" }}>
            <SideBarComponent role={data} />
            <Layout style={{ backgroundColor: "white" }}>
              <Content style={{ padding: 30, marginLeft: siderMarginLeft }}>
                <Outlet />
              </Content>
            </Layout>
          </Layout>
        </ConfigProvider>
      </ThemeProvider>
    </>
  );
}
