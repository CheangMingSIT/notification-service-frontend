import { redirect } from "react-router-dom";

export async function checkToken() {
  const token = localStorage.getItem("token");
  if (!token) {
    return redirect("/");
  }
  return null;
}
