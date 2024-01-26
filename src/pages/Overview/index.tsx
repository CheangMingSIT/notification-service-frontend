import { Typography } from "@mui/material";
import { Row } from "antd";
import { Stats } from "../../components";

export function Overview() {
  return (
    <>
      <Row>
        <Typography variant="h2">Overview</Typography>
      </Row>
      <Row style={{ marginTop: "2rem" }}>
        <Typography variant="h6">Today's Stats</Typography>
      </Row>
      <Stats />
      <Row style={{ marginTop: "2rem" }}>
        <Typography variant="h6">Dashboard</Typography>
      </Row>
    </>
  );
}
