import {
  Alert,
  AlertTitle,
  Link,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import { Drawer } from "antd";
import { useEffect, useState } from "react";
import { useActionData, useLoaderData, useNavigation } from "react-router-dom";
import {
  DisableModal,
  EditOrganisationForm,
  EnableModal,
  FormContainer,
  OrganisationForm,
  OrganisationListColumn,
  Record,
} from "../../../components";
import {
  ErrorDataTypes,
  OrganisationDataType,
  OrganisationListDataTypes,
} from "../../../util";

export function CreateOrganisation() {
  const navigation = useNavigation();
  const { data } = useLoaderData() as OrganisationListDataTypes;
  const error = useActionData() as ErrorDataTypes;
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] =
    useState<OrganisationDataType | null>(null);
  const [openDisable, setOpenDisable] = useState(false);
  const [openEnable, setOpenEnable] = useState(false);
  const [organisationId, setOrganisationId] = useState("");
  const formState =
    navigation.state === "submitting"
      ? "Submitting"
      : navigation.state === "loading"
      ? "Saved"
      : "idle";

  useEffect(() => {
    if (error?.statusCode === 400) {
      setOpenSnackbar(true);
    }
  }, [error]);

  useEffect(() => {
    if (formState === "Saved") {
      setOpenSuccessSnackbar(true);
    }
  }, [formState]);

  const handleCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleCloseSuccessSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSuccessSnackbar(false);
  };

  const showDrawer = (Record: OrganisationDataType) => {
    setSelectedRowData(Record);
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const handleOpenDisable = (id: string) => {
    setOpenDisable(true);
    setOrganisationId(id);
  };
  const handleCloseDisable = () => setOpenDisable(false);

  const handleOpenEnable = (id: string) => {
    setOpenEnable(true);
    setOrganisationId(id);
  };
  const handleCloseEnable = () => setOpenEnable(false);

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          severity="error"
          variant="standard"
          sx={{ width: "100%" }}
          onClose={handleCloseSnackbar}
        >
          <AlertTitle> {error?.statusCode}</AlertTitle>
          {error?.message}
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openSuccessSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSuccessSnackbar}
      >
        <Alert
          severity="success"
          sx={{ width: "100%" }}
          onClose={handleCloseSuccessSnackbar}
        >
          Success
        </Alert>
      </Snackbar>
      <FormContainer
        Header="Organisation"
        Subtitle="Create Organisation"
        Linkname="Organisation"
      >
        <OrganisationForm />
        <Typography variant="body1" fontWeight={600} gutterBottom>
          List of Organisation
        </Typography>
        <Record
          data={data}
          columns={[
            ...(OrganisationListColumn || []),
            {
              title: "Action",
              key: "action",
              render: (_, record) => {
                if (record.condition) {
                  return (
                    <Stack direction="row" spacing={4}>
                      <Link
                        underline="hover"
                        onClick={() => showDrawer(record)}
                      >
                        <Typography variant="body2" color="primary">
                          View / Edit
                        </Typography>
                      </Link>
                      {record.isDisabled === false ? (
                        <Link
                          underline="none"
                          onClick={() => handleOpenDisable(record.id)}
                        >
                          <Typography variant="body2" color="error">
                            Disable
                          </Typography>
                        </Link>
                      ) : (
                        <Link
                          underline="none"
                          onClick={() => handleOpenEnable(record.id)}
                        >
                          <Typography variant="body2" color="green">
                            Enable
                          </Typography>
                        </Link>
                      )}
                    </Stack>
                  );
                } else {
                  return (
                    <Stack direction="row" spacing={4}>
                      <Link
                        underline="hover"
                        onClick={() => showDrawer(record)}
                      >
                        <Typography variant="body2" color="primary">
                          Add Condition
                        </Typography>
                      </Link>
                      {record.isDisabled === false ? (
                        <Link
                          underline="none"
                          onClick={() => handleOpenDisable(record.id)}
                        >
                          <Typography variant="body2" color="error">
                            Disable
                          </Typography>
                        </Link>
                      ) : (
                        <Link
                          underline="none"
                          onClick={() => handleOpenEnable(record.id)}
                        >
                          <Typography variant="body2" color="green">
                            Enable
                          </Typography>
                        </Link>
                      )}
                    </Stack>
                  );
                }
              },
            },
          ]}
          rowKey={(organisation) => organisation.id}
          showSizeChanger={false}
          scrollSize={450}
        />
        <Drawer
          title={selectedRowData?.organisation}
          placement="right"
          open={open}
          size="large"
          onClose={onClose}
        >
          <EditOrganisationForm
            organisationId={selectedRowData?.id}
            organisationName={selectedRowData?.organisation}
            condition={selectedRowData?.condition}
            onClose={onClose}
          />
        </Drawer>
        <DisableModal
          openDisable={openDisable}
          handleCloseDisable={handleCloseDisable}
          action={`${organisationId}/disable`}
        />
        <EnableModal
          openEnable={openEnable}
          handleCloseEnable={handleCloseEnable}
          action={`${organisationId}/enable`}
        />
      </FormContainer>
    </>
  );
}
