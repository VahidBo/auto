import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { TopMenu } from "./TopMenu";

export function Layout() {
  return (
    <>
      <TopMenu />
      <Box minHeight="calc(100vh - 160px)">
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}
