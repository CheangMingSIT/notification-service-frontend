import { Typography } from "@mui/material";
import { Col, Row } from "antd";
import { FilterForm, Notificationlog } from "../../components";

export function Records() {
  return (
    <>
      <Row>
        <Typography variant="h3">Records</Typography>
      </Row>
      <Row gutter={[16, 16]}>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={6}
          xl={4}
          style={{ marginTop: "2rem" }}
        >
          <FilterForm />
        </Col>
        <Col xs={24} sm={24} md={24} lg={18} xl={20}>
          <Notificationlog />
        </Col>
      </Row>
    </>
  );
}
