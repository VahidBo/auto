import { Outlet } from "react-router-dom";
import { TopMenu } from "./TopMenu";

export function Layout() {
  return (
    <>
      <TopMenu />
      <Outlet />
    </>
  );
}
