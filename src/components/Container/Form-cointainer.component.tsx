import { ArrowBack } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";

export function FormContainer({ Header, Subtitle, Linkname, children }) {
  const navigate = useNavigate();
  return (
    <Row>
      <Col xs={0} sm={0} md={4} />
      <Col xs={24} sm={24} md={16}>
        <Button
          variant="text"
          startIcon={<ArrowBack />}
          sx={{ textTransform: "capitalize" }}
          onClick={() => navigate(-1)}
        >
          {Linkname}
        </Button>
        <Box marginTop={8}>
          <Typography variant="h3">{Header}</Typography>
          <Typography variant="h6" marginTop={15}>
            {Subtitle}
          </Typography>
          <Box marginTop={4}>{children}</Box>
        </Box>
      </Col>
      <Col xs={0} sm={0} md={4} />
    </Row>
  );
}
