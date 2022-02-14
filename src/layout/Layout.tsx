import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { TopMenu } from "./TopMenu";

export function Layout() {
  return (
    <>
      <TopMenu />
      <Outlet />
      <Footer />
    </>
  );
}
