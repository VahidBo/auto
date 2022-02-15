import { createTheme } from "@mui/material/styles";
import {
  MuiAppBar,
  MuiButton,
  MuiCard,
  MuiCardActions,
  MuiCardContent,
  MuiLink,
  MuiOutlinedInput,
  MuiSelect,
  MuiTypography,
} from "./custom-styles";
import { palette, typography } from "./systemOverrides";

export const theme = createTheme({
  palette,
  typography,
  components: {
    MuiAppBar,
    MuiCard,
    MuiCardContent,
    MuiCardActions,
    MuiButton,
    MuiSelect,
    MuiOutlinedInput,
    MuiTypography,
    MuiLink,
  },
});
