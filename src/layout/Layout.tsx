import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <Box
        sx={{ height: 80, borderBottom: 1, borderColor: "black", display: "flex", px: 3, py: 1, alignItems: "center" }}
      >
        <Typography variant="body1">This is the layout</Typography>
      </Box>
      <Outlet />
    </>
  );
}
