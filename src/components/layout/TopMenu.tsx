import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import MenuButton from "../menu-button/MenuButton";

export const pages = [
  { title: "Purchase", route: "/" },
  { title: "My Orders", route: "/" },
  { title: "Sell", route: "/" },
];

export function TopMenu() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1, "& img": { height: 36 } }}>
            <img src={process.env.PUBLIC_URL + "/logo.png"} alt="auto logo" />
          </Box>
          <Box
            component="nav"
            sx={{
              display: { xs: "none", md: "block" },
              a: { textDecoration: "none", ml: 3, typography: "body2", color: "text.primary" },
            }}
          >
            {pages.map((page) => (
              <Link key={page.title} to={page.route}>
                {page.title}
              </Link>
            ))}
          </Box>
          <Box component="nav" sx={{ display: { xs: "block", md: "none" } }}>
            <MenuButton buttonText="Menu" menuItems={pages} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
