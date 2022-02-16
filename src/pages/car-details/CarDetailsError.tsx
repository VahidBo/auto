import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import { Link } from "react-router-dom";

export interface CarDetailsErrorProps {
  refetch: () => void;
}

export function CarDetailsError({ refetch }: CarDetailsErrorProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Box sx={{ backgroundColor: grey["A200"], width: 1, height: 300 }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: 1,
          p: 3,
          alignItems: "center",
          a: { typography: "caption" },
        }}
      >
        <Typography variant="h4" mb={3}>
          Something went wrong :(
        </Typography>
        <Button onClick={refetch} sx={{ mb: 3 }}>
          Retry
        </Button>
        <Link to="/" replace>
          Go to homepage
        </Link>
      </Box>
    </Box>
  );
}
