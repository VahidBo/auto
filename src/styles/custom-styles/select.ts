import { Components } from "@mui/material";
import { grey } from "@mui/material/colors";
import { spacing, typography } from "../systemOverrides";

export const MuiSelect: Components["MuiSelect"] = {
  styleOverrides: {
    select: { padding: spacing(1, 1.5) },
    outlined: { ...typography.body2 },
    iconOutlined: { color: grey["A200"] },
  },
};

export const MuiOutlinedInput: Components["MuiOutlinedInput"] = {
  styleOverrides: {
    notchedOutline: {
      borderColor: grey["A200"],
      "&:hover": { borderColor: grey["A200"] },
    },
  },
};
