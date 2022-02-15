import GlobalStyles, { GlobalStylesProps } from "@mui/material/GlobalStyles";
import { palette } from "./systemOverrides";

const styles: GlobalStylesProps["styles"] = {
  "*": { boxSizing: "border-box" },
  body: { margin: 0 },
  a: { textDecoration: "none", color: palette.primary.main },
};

export const globalStyles = <GlobalStyles styles={styles} />;
