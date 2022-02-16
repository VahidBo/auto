import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export const SORRY_TEXT = "Sorry, the page you are looking for does not exist.";

export function NotFound() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", pt: 20 }}>
      <Box sx={{ "& img": { height: 36 }, mb: 3 }}>
        <img src={process.env.PUBLIC_URL + "/logo.png"} alt="auto logo" />
      </Box>
      <Typography variant="h4" mb={3}>
        404 - Not Found
      </Typography>
      <Typography variant="body1" mb={3}>
        {SORRY_TEXT}
      </Typography>
      <Typography variant="body1">
        You can always go back to the <Link to="/">homepage</Link>.
      </Typography>
    </Box>
  );
}
