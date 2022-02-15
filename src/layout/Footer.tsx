import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import Typography from "@mui/material/Typography";

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "white",
        display: "flex",
        width: 1,
        height: 80,
        borderTop: 1,
        borderColor: grey["A200"],
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="caption">© --Company Name-- Group 2018</Typography>
    </Box>
  );
}
