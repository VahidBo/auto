import { createTheme } from "@mui/material/styles";
import { MuiAppBar } from "./custom-styles";
import { palette } from "./palette";

export const theme = createTheme({
  palette,
  components: {
    MuiAppBar,
  },
});
