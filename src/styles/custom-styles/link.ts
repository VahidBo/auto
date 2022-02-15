import { Components } from "@mui/material";
import { typography } from "../systemOverrides";

export const MuiLink: Components["MuiLink"] = {
  styleOverrides: {
    root: {
      ...typography.caption,
      textDecoration: "none",
      "&:hover": { textDecoration: "underline" },
    },
  },
};
