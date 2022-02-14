import { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import MuiSelect, { SelectProps as MuiSelectProps } from "@mui/material/Select";

export interface SelectProps extends MuiSelectProps {
  options: { label: string; value: string }[];
  sx?: SxProps;
}

export function Select({ options, sx = {}, ...selectProps }: SelectProps) {
  return (
    <Box sx={{ minWidth: 240, ...sx }}>
      <FormControl fullWidth>
        <MuiSelect {...selectProps}>
          {options.map((opt) => (
            <MenuItem key={opt.value} value={opt.value}>
              {opt.label}
            </MenuItem>
          ))}
        </MuiSelect>
      </FormControl>
    </Box>
  );
}
