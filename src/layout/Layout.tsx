import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div>
      This is the layout
      <Outlet />
    </div>
  );
}
