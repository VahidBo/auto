import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState, MouseEvent } from "react";

export interface MenuButtonProps {
  buttonText: string;
  menuItems: { title: string; route: string }[];
}

export default function MenuButton({ buttonText, menuItems }: MenuButtonProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button onClick={handleClick}>{buttonText}</Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {menuItems.map((item) => (
          <MenuItem key={item.title}>{item.title}</MenuItem>
        ))}
      </Menu>
    </div>
  );
}
