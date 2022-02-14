import { createTheme } from "@mui/material/styles";
import { MuiAppBar } from "./custom-styles";
import { palette } from "./palette";
import { typography } from "./typography";

export const theme = createTheme({
  palette,
  typography,
  components: {
    MuiAppBar,
  },
});
