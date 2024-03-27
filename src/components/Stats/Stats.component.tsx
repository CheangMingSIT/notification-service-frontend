import { Typography } from "@mui/material";
import { Card, Col, ConfigProvider, Row } from "antd";

export function Stats({ data }) {
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
        <Row
          gutter={[{ xs: 4, sm: 8, md: 16, lg: 25 }, 20]}
          style={{ marginTop: "1rem" }}
        >
          <Col xs={24} lg={12} xl={8}>
            <Card>
              <Row>
                <Typography variant="subtitle1">Total Sent Request</Typography>
              </Row>
              <Row>
                <Typography variant="h2">{data.record}</Typography>
              </Row>
            </Card>
          </Col>
          <Col xs={24} lg={12} xl={8}>
            <Card>
              <Row>
                <Typography variant="subtitle1">Message In Queue</Typography>
              </Row>
              <Row>
                <Typography variant="h2">{data.InQueue}</Typography>
              </Row>
            </Card>
          </Col>
          <Col xs={24} lg={12} xl={8}>
            <Card>
              <Row>
                <Typography variant="subtitle1">Undelivered Message</Typography>
              </Row>
              <Row>
                <Typography variant="h2">{data.Fail}</Typography>
              </Row>
            </Card>
          </Col>
          <Col xs={24} lg={12} xl={8}>
            <Card>
              <Row>
                <Typography variant="subtitle1">MongoDB</Typography>
              </Row>
              <Row>
                <Typography variant="h2">Up</Typography>
              </Row>
            </Card>
          </Col>
          <Col xs={24} lg={12} xl={8}>
            <Card>
              <Row>
                <Typography variant="subtitle1">PostgresDB</Typography>
              </Row>
              <Row>
                <Typography variant="h2">Up</Typography>
              </Row>
            </Card>
          </Col>
        </Row>
      </ConfigProvider>
    </>
  );
}
