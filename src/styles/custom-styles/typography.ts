import { Components } from "@mui/material";
import { palette } from "../systemOverrides";

export const MuiTypography: Components["MuiTypography"] = {
  styleOverrides: {
    root: {
      color: palette.text.primary,
    },
  },
};
