import { Components } from "@mui/material";
import { grey } from "@mui/material/colors";
import { spacing } from "../systemOverrides";

export const MuiCard: Components["MuiCard"] = {
  defaultProps: { variant: "outlined" },
  styleOverrides: {
    root: {
      borderColor: grey["A200"],
      borderRadius: 0,
    },
  },
};

export const MuiCardContent: Components["MuiCardContent"] = {
  styleOverrides: {
    root: {
      padding: spacing(3),
    },
  },
};

export const MuiCardActions: Components["MuiCardActions"] = {
  styleOverrides: {
    root: {
      flexDirection: "row-reverse",
      padding: spacing(0, 3, 3, 3),
    },
  },
};
