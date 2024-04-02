import { redirect } from "react-router-dom";

export async function Logout() {
  localStorage.removeItem("token");
  return redirect("/");
}
