import { createTheme } from "@mui/material/styles";
import {
  MuiAppBar,
  MuiButton,
  MuiCard,
  MuiCardActions,
  MuiCardContent,
  MuiOutlinedInput,
  MuiSelect,
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
  },
});
