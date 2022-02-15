import GlobalStyles, { GlobalStylesProps } from "@mui/material/GlobalStyles";

const styles: GlobalStylesProps["styles"] = {
  "*": { boxSizing: "border-box" },
  body: { margin: 0 },
  a: { textDecoration: "none" },
};

export const globalStyles = <GlobalStyles styles={styles} />;
