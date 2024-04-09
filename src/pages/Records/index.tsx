import { FilterList } from "@mui/icons-material";
import { Button, Grid, Popover, Stack, Typography } from "@mui/material";

import { useState } from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";
import { FilterForm, NotificationRecord } from "../../components";
import { NotificationDataType } from "../../util";

export function Records() {
  const { data } = useLoaderData() as NotificationDataType;
  const [searchParams, setSearchParams] = useSearchParams();
  const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const handlePage = (page, pageSize) => {
    setPage(page);
    setPageSize(pageSize);
    const params = new URLSearchParams(searchParams);
    params.set("page", page);
    params.set("pageSize", pageSize);
    setSearchParams(params);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setPageSize(10);
    setPage(1);
    const form = document.getElementById("filter-logs") as HTMLFormElement;
    const formData = new FormData(form);
    const params = new URLSearchParams(searchParams);
    formData.forEach((value, key) => {
      params.set(key, value as string);
    });
    params.set("page", "1");
    params.set("pageSize", "10");
    setSearchParams(params);
    handleClose();
  };
  return (
    <>
      <Typography variant="h5" fontWeight={700}>
        Notification Records
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} justifyContent={"space-between"}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="overline" display={"block"}>
              Total: {data.totalCount} Records
            </Typography>
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
              <FilterForm handleSearch={handleSearch} />
            </Popover>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <NotificationRecord
            logs={data.payload}
            pageHandler={handlePage}
            page={page}
            pageSize={pageSize}
            totalCount={data.totalCount}
          />
        </Grid>
      </Grid>
    </>
  );
}
