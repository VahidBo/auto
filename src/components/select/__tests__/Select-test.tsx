import { fireEvent, render, screen } from "@testing-library/react";
import { Select } from "../Select";

const mockOptions = [
  { label: "default", value: "default" },
  { label: "Opt 1", value: "opt1" },
  { label: "Opt 2", value: "opt2" },
  { label: "Opt 3", value: "opt3" },
];

test("Render Select component with a velue", () => {
  render(<Select options={mockOptions} value="default" />);
  expect(screen.getByText("default")).toBeInTheDocument();
});

test("Open options and select onother option", () => {
  render(<Select options={mockOptions} />);

  fireEvent.mouseDown(screen.getByRole("button"));
  expect(screen.getByRole("listbox")).toBeInTheDocument();

  fireEvent.click(screen.getByText("Opt 2"));
  expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  expect(screen.getByRole("button")).toHaveTextContent("Opt 2");
});
