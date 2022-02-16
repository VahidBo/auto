import { Components } from "@mui/material";
import { palette } from "../systemOverrides";

export const MuiButton: Components["MuiButton"] = {
  defaultProps: { variant: "contained" },
  styleOverrides: {
    root: {
      width: 128,
      color: "white",
      boxShadow: "none",
      justifyContent: "center",
      borderRadius: 2,
      "&:hover": {
        backgroundColor: palette.secondary.main,
        boxShadow: "none",
      },
    },
    sizeMedium: {
      height: 32,
    },
  },
};
