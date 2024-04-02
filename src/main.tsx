import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  ForgotPassword,
  Login,
  ResetPassword,
  ResetSuccessful,
} from "./pages/Authentication";
import { ErrorPage } from "./pages/Error";
import { Overview } from "./pages/Overview";
import { Records } from "./pages/Records";
import { LoginRoot, Root } from "./pages/Root";
import {
  ConfigurationRoot,
  EditRole,
  RoleConfiguration,
  RoleCreation,
} from "./pages/System Configuration";
import {
  ApiKeySecurity,
  Organisation,
  OrganisationAdminSetup,
  UserCreate,
  UserEditSecurity,
  UserManagementRoot,
  UserSecurity,
} from "./pages/User Management";
import {
  CreateOrganisationAction,
  CreateOrganisationAdminAction,
  DisableOrganisation,
  DisableUserAction,
  EnableOrganisation,
  EnableUserAction,
  GetRoleLoader,
  GetUserLoader,
  GroupPermission,
  GroupUsersByOrganisation,
  MenuLoader,
  ToggleRoleStatusAction,
  UpdateOrganisation,
  UpdateRolePermissionAction,
  UpdateUserAction,
  apiKeyListLoader,
  createApiKeyAction,
  createRoleAction,
  disableApiKeyAction,
  enableApiKeyAction,
  forgotPasswordAction,
  loginAction,
  overviewLoader,
  registrationAction,
  resetPasswordAction,
  roleDropDownLoader,
  roleListLoader,
  searchLogsLoader,
  userListLoader,
} from "./services";
import { Logout } from "./util";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginRoot />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />,
        action: loginAction,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
        action: forgotPasswordAction,
      },
      {
        path: "/reset-password",
        element: <ResetPassword />,
        action: resetPasswordAction,
      },
      {
        path: "reset-successfully",
        element: <ResetSuccessful />,
      },
    ],
  },
  {
    element: <Root />,
    loader: MenuLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/Overview",
        index: true,
        element: <Overview />,
        errorElement: <ErrorPage />,
        loader: overviewLoader,
      },
      {
        path: "/NotificationRecords",
        element: <Records />,
        errorElement: <ErrorPage />,
        loader: searchLogsLoader,
      },
      {
        path: "/Analytics",
        element: <h3>Analytics</h3>,
      },
      {
        path: "/UserManagement",
        element: <UserManagementRoot />,
        action: CreateOrganisationAction,
        errorElement: <ErrorPage />,
        id: "role-dropdown",
        loader: roleDropDownLoader,
        children: [
          {
            path: "Users",
            element: <UserSecurity />,
            loader: userListLoader,
            children: [
              {
                path: ":userId/disable",
                action: DisableUserAction,
              },
              {
                path: ":userId/enable",
                action: EnableUserAction,
              },
            ],
          },
          {
            path: "ApiKeys",
            element: <ApiKeySecurity />,
            loader: apiKeyListLoader,
            action: createApiKeyAction,
            children: [
              {
                path: ":id/disable",
                action: disableApiKeyAction,
              },
              {
                path: ":id/enable",
                action: enableApiKeyAction,
              },
            ],
          },
          {
            path: "Organisation",
            element: <Organisation />,
            loader: GroupUsersByOrganisation,
            action: UpdateOrganisation,
            children: [
              {
                path: ":organisationId/disable",
                action: DisableOrganisation,
              },
              {
                path: ":organisationId/enable",
                action: EnableOrganisation,
              },
            ],
          },
        ],
      },
      {
        path: "/SystemConfiguration",
        element: <ConfigurationRoot />,
        id: "role-id",
        loader: roleListLoader,
        children: [
          {
            path: "Roles",
            element: <RoleConfiguration />,
            children: [
              {
                path: ":roleId/disable",
                action: ToggleRoleStatusAction,
              },
              {
                path: ":roleId/enable",
                action: ToggleRoleStatusAction,
              },
            ],
          },
        ],
      },
      {
        path: "/UserManagement/Users/Create",
        element: <UserCreate />,
        loader: roleDropDownLoader,
        action: registrationAction,
      },
      {
        path: "/UserManagement/Users/:userId",
        id: "user-id",
        loader: GetUserLoader,
        children: [
          {
            path: "edit",
            element: <UserEditSecurity />,
            action: UpdateUserAction,
          },
        ],
      },
      {
        path: "/SystemConfiguration/Roles/Create",
        element: <RoleCreation />,
        loader: GroupPermission,
        action: createRoleAction,
      },
      {
        path: "/SystemConfiguration/Roles/:roleId",
        id: "individual-role-data",
        loader: GetRoleLoader,
        children: [
          {
            path: "edit",
            element: <EditRole />,
            loader: GroupPermission,
            action: UpdateRolePermissionAction,
          },
        ],
      },
      {
        path: "/UserManagement/Organisation/CreateAdmin",
        children: [
          {
            path: ":organisationId",
            element: <OrganisationAdminSetup />,
            action: CreateOrganisationAdminAction,
          },
        ],
      },
      {
        path: "/Logout",
        loader: Logout,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
