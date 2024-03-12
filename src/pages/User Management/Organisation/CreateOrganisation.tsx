import { Alert, AlertTitle, Snackbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useActionData, useLoaderData } from "react-router-dom";
import {
  FormContainer,
  OrganisationForm,
  OrganisationListColumn,
  Record,
} from "../../../components";
import { ErrorDataTypes, OrganisationListDataTypes } from "../../../util";

export function CreateOrganisation() {
  const { data } = useLoaderData() as OrganisationListDataTypes;
  const error = useActionData() as ErrorDataTypes;
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const listOfOrganisation = data.map((organisation) => {
    return {
      id: organisation.id,
      organisation: organisation.name,
    };
  });
  useEffect(() => {
    if (error?.statusCode === 400) {
      setOpenSnackbar(true);
    }
  }, [error]);

  const handleCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };
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
          data={listOfOrganisation}
          columns={OrganisationListColumn}
          rowKey={(organisation) => organisation.id}
          showSizeChanger={false}
        />
      </FormContainer>
    </>
  );
}
