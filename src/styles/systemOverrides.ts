import createPalette, { PaletteOptions } from "@mui/material/styles/createPalette";
import createTypography, { TypographyOptions } from "@mui/material/styles/createTypography";
import createSpacing from "@mui/system/createTheme/createSpacing";

const paletteOptions: PaletteOptions = {
  primary: {
    main: "#EA7F28",
  },
  secondary: {
    main: "#D37324",
  },
  text: {
    primary: "#4A4A4A",
  },
  grey: {
    A200: "#EDEDED",
  },
};
export const palette = createPalette(paletteOptions);

export const typographyOptions: TypographyOptions = {
  body1: {
    fontSize: "1.125rem",
    fontWeight: 400,
  },
  button: {
    fontWeight: 400,
    lineHeight: 1.5,
  },
  h4: {
    fontSize: "2rem",
    fontWeight: 700,
  },
  h6: {
    fontSize: "1.125rem",
    fontWeight: 700,
  },
};
export const typography = createTypography(palette, typographyOptions);

export const spacing = createSpacing();
