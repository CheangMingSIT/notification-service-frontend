import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Box, IconButton, Stack, TextField, useTheme } from "@mui/material";
import { useState } from "react";
import { StyledButton } from "../../../assets/style";
import {
  ApikeyListColumn,
  ApikeyListDataTypes,
  CreateApiKey,
  DeleteModal,
  Record,
} from "../../../components";

const ApiKeyData: ApikeyListDataTypes[] = [
  {
    Name: "Test",
    SecretKey: "1234...6789",
  },
  {
    Name: "Test2",
    SecretKey: "1234...6789",
  },
];

export function ApiKeySecurity() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  return (
    <>
      <Stack
        direction={{ sm: "column", md: "row", lg: "row" }}
        spacing={{
          xs: theme.spacing(4),
          sm: theme.spacing(2),
          md: theme.spacing(4),
        }}
        justifyContent={{
          sm: "space-evenly",
          md: "space-between",
        }}
      >
        <TextField
          id="SearchName"
          placeholder="Search name"
          size="small"
          variant="outlined"
          sx={{ width: { xs: "100%", sm: "100%", md: "22rem", lg: "22rem" } }}
        />
        <StyledButton
          variant="contained"
          disableElevation
          startIcon={<AddIcon />}
          onClick={handleOpen}
          sx={{ width: { xs: "100%", sm: "100%", md: "12rem", lg: "12rem" } }}
        >
          Generate new key
        </StyledButton>
      </Stack>
      <CreateApiKey open={open} handleClose={handleClose} />
      <Box sx={{ marginTop: theme.spacing(4) }}>
        <Record
          columns={[
            ...(ApikeyListColumn || []),
            {
              title: "Actions",
              key: "Action",
              align: "center",
              render: (_) => (
                <IconButton
                  color="error"
                  size="small"
                  onClick={handleOpenDelete}
                >
                  <DeleteOutlineOutlinedIcon />
                </IconButton>
              ),
            },
          ]}
          data={ApiKeyData}
        />
        <DeleteModal
          openDelete={openDelete}
          handleCloseDelete={handleCloseDelete}
        />
      </Box>
    </>
  );
}
