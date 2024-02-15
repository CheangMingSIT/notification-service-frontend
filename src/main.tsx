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
  AddPermission,
  ApiKeySecurity,
  PermissionSecurity,
  RoleSecurity,
  SecurityRoot,
  UserEditSecurity,
  UserSecurity,
} from "./pages/Security";
import {
  GetUserLoader,
  UpdateUserAction,
  createPermissionAction,
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
        path: "/Security",
        element: <SecurityRoot />,
        children: [
          {
            path: "Users",
            element: <UserSecurity />,
            loader: userListLoader,
          },
          {
            path: "Roles",
            element: <RoleSecurity />,
            loader: roleListLoader,
          },
          {
            path: "Permissions",
            element: <PermissionSecurity />,
            loader: permissionListLoader,
          },
          {
            path: "ApiKeys",
            element: <ApiKeySecurity />,
          },
        ],
      },
      {
        path: "/Security/Users/:userId",
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
        path: "/Security/Permissions/Create",
        element: <AddPermission />,
        action: createPermissionAction,
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
