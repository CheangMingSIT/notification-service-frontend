import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Result } from "antd";
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
  forgotPasswordAction,
  loginAction,
  registrationAction,
  resetPasswordAction,
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
    errorElement: <h1>404</h1>,
    children: [
      {
        path: "/Overview",
        index: true,
        element: <Overview />,
      },
      {
        path: "/NotificationRecords",
        element: <Records />,
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
            id: "security-users",
            element: <UserSecurity />,
          },
          {
            path: "Roles",
            element: <RoleSecurity />,
          },
          {
            path: "Permissions",
            element: <PermissionSecurity />,
          },
          {
            path: "ApiKeys",
            element: <ApiKeySecurity />,
          },
        ],
      },
      {
        path: "/Security/Users/:userId",
        children: [
          {
            path: "Edit",
            element: <UserEditSecurity />,
          },
        ],
      },
      {
        path: "Security/Permissions",
        children: [
          {
            path: "Add",
            element: <AddPermission />,
          },
        ],
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
