import GlobalStyles, { GlobalStylesProps } from "@mui/material/GlobalStyles";
import { palette } from "./systemOverrides";

const styles: GlobalStylesProps["styles"] = {
  "*": { boxSizing: "border-box" },
  body: { margin: 0 },
  a: {
    textDecoration: "none",
    cursor: "pointer",
    color: palette.primary.main,
    "&:hover": { textDecoration: "underline" },
  },
};

export const globalStyles = <GlobalStyles styles={styles} />;
