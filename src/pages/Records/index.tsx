import { FilterList } from "@mui/icons-material";
import { Button, Popover, Typography } from "@mui/material";
import { Col, Row } from "antd";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FilterForm, NotificationRecord } from "../../components";

export function Records() {
  const data = useLoaderData();
  const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
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
          lg={24}
          xl={24}
          style={{ marginTop: "2rem" }}
        >
          <Row justify={"end"}>
            <Button
              variant="text"
              color="info"
              startIcon={<FilterList />}
              onClick={handleClick}
            >
              Filter
            </Button>
            <Popover
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              elevation={3}
              slotProps={{
                paper: {
                  sx: {
                    borderRadius: "10px",
                    width: "25rem",
                  },
                },
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <FilterForm />
            </Popover>
          </Row>
          <NotificationRecord logs={data} />
        </Col>
      </Row>
    </>
  );
}
