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
  forgotPasswordAction,
  loginAction,
  registrationAction,
  resetPasswordAction,
} from "./services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginRoot />,
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
        element: <h3>Security</h3>,
      },
      {
        path: "/ApiKeys",
        element: <h3>Api Keys</h3>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
