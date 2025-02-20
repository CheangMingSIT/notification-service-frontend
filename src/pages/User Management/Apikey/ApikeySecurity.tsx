import { ContentCopyOutlined } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import BlockIcon from "@mui/icons-material/Block";
import {
  Alert,
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  Snackbar,
  Stack,
  TextField,
  useTheme,
} from "@mui/material";
import { ReactElement, useState } from "react";
import {
  Form,
  useActionData,
  useLoaderData,
  useSubmit,
} from "react-router-dom";
import { StyledButton, StyledDialog } from "../../../assets/style";
import {
  ApikeyListColumn,
  CreateApiKey,
  DisableModal,
  EnableModal,
  Record,
} from "../../../components";
import { ApiKeyDataTypes } from "../../../util";

export function ApiKeySecurity() {
  const { spacing } = useTheme();
  const submit = useSubmit();
  const { data } = useLoaderData() as ApiKeyDataTypes;
  const secretKey = useActionData() as string;
  const [openGenerate, setOpenGenerate] = useState(false);
  const [openDisable, setOpenDisable] = useState(false);
  const [openEnable, setOpenEnable] = useState(false);
  const [apikeyId, setApikeyId] = useState("");
  const [openSecretKey, setOpenSecretkey] = useState(false);
  const [alert, setAlert] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleOpenGenerate = () => setOpenGenerate(true);
  const handleCloseGenerate = () => setOpenGenerate(false);
  const handleOpenDisable = (id: string) => {
    setOpenDisable(true);
    setApikeyId(id);
  };
  const handleCloseDisable = () => setOpenDisable(false);

  const handleOpenEnable = (id: string) => {
    setOpenEnable(true);
    setApikeyId(id);
  };
  const handleCloseEnable = () => setOpenEnable(false);

  const handleOpenSecretKey = () => {
    setOpenSecretkey(true);
    handleCloseGenerate();
  };
  const handleCloseSecretKey = () => setOpenSecretkey(false);

  const apikeyData = data.map((item) => {
    let isDisabled = item.isDisabled.toString();
    if (item.isDisabled === true) {
      return {
        id: item.id,
        name: `${item.name} (Disabled)`,
        isDisabled: isDisabled,
        secretKey: `${item.secretKey.slice(
          0,
          8
        )}xxxxxxxxxxxx${item.secretKey.slice(-8)}`,
      };
    } else {
      return {
        id: item.id,
        name: item.name,
        isDisabled: isDisabled,
        secretKey: `${item.secretKey.slice(
          0,
          8
        )}xxxxxxxxxxxx${item.secretKey.slice(-8)}`,
      };
    }
  });

  const alertBox = (alertType: string) => {
    if (alertType === "error") {
      setAlert("error");
      handleOpenSnackbar();
    }
  };

  const handleCloseSnackbar = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
  };

  const changeAlert = (): ReactElement<any, any> => {
    if (alert === "error") {
      return (
        <Alert
          severity="error"
          sx={{ width: "100%" }}
          onClose={handleCloseSnackbar}
        >
          Please do enter a name for the secret key.
        </Alert>
      );
    } else if (alert === "copied") {
      return (
        <Alert
          severity="success"
          sx={{ width: "100%" }}
          onClose={handleCloseSnackbar}
        >
          Secret key copied to clipboard
        </Alert>
      );
    }
    return <></>;
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
      >
        {changeAlert()}
      </Snackbar>

      <Stack
        direction={{ sm: "column", md: "row", lg: "row" }}
        spacing={{
          xs: spacing(4),
          sm: spacing(2),
          md: spacing(4),
        }}
        justifyContent={{
          sm: "space-evenly",
          md: "space-between",
        }}
      >
        <Form method="GET" role="search">
          <TextField
            id="SearchName"
            placeholder="Search name"
            name="name"
            size="small"
            autoComplete="off"
            variant="outlined"
            onChange={(event) => submit(event.currentTarget.form)}
            sx={{ width: { xs: "100%", sm: "100%", md: "22rem", lg: "22rem" } }}
          />
        </Form>
        <StyledButton
          variant="contained"
          disableElevation
          startIcon={<AddIcon />}
          onClick={handleOpenGenerate}
          sx={{ width: { xs: "100%", sm: "100%", md: "12rem", lg: "12rem" } }}
        >
          Generate new key
        </StyledButton>
      </Stack>

      <CreateApiKey
        open={openGenerate}
        handleClose={handleCloseGenerate}
        handleOpenSecretKey={handleOpenSecretKey}
        alertBox={alertBox}
      />

      <StyledDialog
        open={openSecretKey}
        onClose={handleCloseSecretKey}
        fullWidth
      >
        <DialogTitle variant="h5" sx={{ fontWeight: 700 }}>
          Secret key generated
        </DialogTitle>
        <DialogContent>
          <Grid container columnSpacing={2} rowSpacing={4}>
            <Grid item xs={12}>
              <DialogContentText variant="body1">
                Please save this secret key somewhere safe and accessible. For
                security reasons, you won't be able to view it again. If you
                lose this secret key, you'll need to generate a new one.
              </DialogContentText>
            </Grid>
            <Grid item xs={12} md={10}>
              <TextField
                id="secretKey"
                type="text"
                autoComplete="off"
                value={secretKey ?? ""}
                fullWidth
                size="small"
                inputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Button
                type="button"
                fullWidth
                variant="contained"
                disableElevation
                startIcon={<ContentCopyOutlined />}
                sx={{ lineHeight: 2 }}
                onClick={() => {
                  navigator.clipboard.writeText(secretKey);
                  setAlert("copied");
                  handleOpenSnackbar();
                }}
              >
                Copy
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Grid container justifyContent="end">
            <Button type="button" variant="text" onClick={handleCloseSecretKey}>
              Done
            </Button>
          </Grid>
        </DialogActions>
      </StyledDialog>

      <Box sx={{ marginTop: spacing(4) }}>
        <Record
          showSizeChanger={true}
          columns={[
            ...(ApikeyListColumn || []),
            {
              title: "Actions",
              key: "Action",
              align: "center",
              render: (apikey, _) => {
                if (apikey.isDisabled === "false") {
                  return (
                    <IconButton
                      color="error"
                      size="small"
                      onClick={() => handleOpenDisable(apikey.id)}
                      key="disable-icon"
                    >
                      <BlockIcon />
                    </IconButton>
                  );
                }
                return (
                  <Button
                    variant="text"
                    color="success"
                    size="small"
                    key="enable-icon"
                    onClick={() => handleOpenEnable(apikey.id)}
                  >
                    Enable
                  </Button>
                );
              },
            },
          ]}
          data={apikeyData}
          scrollSize={"calc(100vh - 300px)"}
          rowKey={(apiKeys) => apiKeys.id}
        />
      </Box>
      <DisableModal
        action={`${apikeyId}/disable`}
        openDisable={openDisable}
        handleCloseDisable={handleCloseDisable}
      />
      <EnableModal
        action={`${apikeyId}/enable`}
        openEnable={openEnable}
        handleCloseEnable={handleCloseEnable}
      />
    </>
  );
}
