import { redirect } from "react-router-dom";

export async function checkToken() {
  const token = localStorage.getItem("token");
  if (!token) {
    return redirect("/");
  }
  return null;
}

export async function logoutLoader() {
  localStorage.removeItem("token");
  return redirect("/");
}
