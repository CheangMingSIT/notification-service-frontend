import { Result } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  ForgotPassword,
  Login,
  Registration,
  ResetPassword,
} from "./pages/Authentication";
import { Overview } from "./pages/Overview";
import { Records } from "./pages/Records";
import { LoginRoot, Root } from "./pages/Root";
import {
  ConfigurationRoot,
  CreateRole,
  RoleConfiguration,
} from "./pages/System Configuration";
import {
  ApiKeySecurity,
  CreateOrganisation,
  Organisation,
  UserEditSecurity,
  UserManagementRoot,
  UserSecurity,
} from "./pages/User Management";
import {
  CreateOrganisationAction,
  DisableUserAction,
  EnableUserAction,
  GetOrganisationUsers,
  GetUserLoader,
  OrganisationList,
  UpdateUserAction,
  apiKeyListLoader,
  createApiKeyAction,
  createRoleAction,
  deleteApiKeyAction,
  forgotPasswordAction,
  loginAction,
  permissionListLoader,
  registrationAction,
  resetPasswordAction,
  roleListLoader,
  searchLogsLoader,
  userListLoader,
} from "./services";
import { checkToken, logoutLoader } from "./util";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginRoot />,
    errorElement: (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
      />
    ),
    children: [
      {
        index: true,
        element: <Login />,
        action: loginAction,
      },
      {
        path: "/register",
        element: <Registration />,
        action: registrationAction,
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
    ],
  },
  {
    element: <Root />,
    loader: checkToken,
    children: [
      {
        path: "/Overview",
        index: true,
        element: <Overview />,
      },
      {
        path: "/NotificationRecords",
        element: <Records />,
        loader: searchLogsLoader,
      },
      {
        path: "/Analytics",
        element: <h3>Analytics</h3>,
      },
      {
        path: "/UserManagement",
        element: <UserManagementRoot />,
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
                path: ":id/delete",
                action: deleteApiKeyAction,
              },
            ],
          },
          {
            path: "Organisation",
            element: <Organisation />,
            loader: GetOrganisationUsers,
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
            index: true,
            element: <RoleConfiguration />,
          },
        ],
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
        element: <CreateRole />,
        loader: permissionListLoader,
        action: createRoleAction,
      },
      {
        path: "/UserManagement/Organisation/Create",
        element: <CreateOrganisation />,
        loader: OrganisationList,
        action: CreateOrganisationAction,
      },
      {
        path: "/Logout",
        loader: logoutLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
