import { Components } from "@mui/material";
import { grey } from "@mui/material/colors";

export const MuiAppBar: Components["MuiAppBar"] = {
  styleOverrides: {
    root: {
      height: 80,
      justifyContent: "center",
      backgroundColor: "white",
      boxShadow: "none",
      borderBottom: "1px solid",
      borderColor: grey["A200"],
    },
  },
};
