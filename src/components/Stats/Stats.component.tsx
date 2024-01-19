import { Typography } from "@mui/material";
import { Card, Col, ConfigProvider, Row } from "antd";

export function Stats() {
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Card: {
              colorBgContainer: "transparent",
              colorBorderSecondary: "#CCCCCC",
            },
          },
        }}
      >
        <Row gutter={[{ xs: 4, sm: 8, md: 16, lg: 24 }, 2]}>
          <Col
            className="gutter-row"
            xs={24}
            lg={12}
            xl={8}
            style={{ marginTop: "1rem" }}
          >
            <Card>
              <Row>
                <Typography variant="body2">Total Sent Request</Typography>
              </Row>
              <Row>
                <Typography variant="h3">128</Typography>
              </Row>
            </Card>
          </Col>
          <Col
            className="gutter-row"
            xs={24}
            lg={12}
            xl={8}
            style={{ marginTop: "1rem" }}
          >
            <Card>
              <Row>
                <Typography variant="body2">Message In Queue</Typography>
              </Row>
              <Row>
                <Typography variant="h3">12</Typography>
              </Row>
            </Card>
          </Col>
          <Col
            className="gutter-row"
            xs={24}
            lg={12}
            xl={8}
            style={{ marginTop: "1rem" }}
          >
            <Card>
              <Row>
                <Typography variant="body2">Undelivered Message</Typography>
              </Row>
              <Row>
                <Typography variant="h3">5</Typography>
              </Row>
            </Card>
          </Col>
          <Col
            className="gutter-row"
            xs={24}
            lg={12}
            xl={8}
            style={{ marginTop: "1rem" }}
          >
            <Card>
              <Row>
                <Typography variant="body2">MongoDB</Typography>
              </Row>
              <Row>
                <Typography variant="h3">Up</Typography>
              </Row>
            </Card>
          </Col>
          <Col
            className="gutter-row"
            xs={24}
            lg={12}
            xl={8}
            style={{ marginTop: "1rem" }}
          >
            <Card>
              <Row>
                <Typography variant="body2">PostgresDB</Typography>
              </Row>
              <Row>
                <Typography variant="h3">Up</Typography>
              </Row>
            </Card>
          </Col>
        </Row>
      </ConfigProvider>
    </>
  );
}
