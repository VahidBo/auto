import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Select } from "../Select";

const mockOptions = [
  { label: "default", value: "default" },
  { label: "Opt 1", value: "opt1" },
  { label: "Opt 2", value: "opt2" },
  { label: "Opt 3", value: "opt3" },
];

test("Render Select component (Controlled)", () => {
  const onChange = jest.fn();
  render(<Select options={mockOptions} value="default" onChange={onChange} />);
  expect(screen.getByText("default")).toBeInTheDocument();
});

test("Open options and call onChange another one (Controlled)", () => {
  const onChange = jest.fn();
  render(<Select options={mockOptions} value="default" onChange={onChange} />);

  userEvent.click(screen.getByRole("button"));
  expect(screen.getByRole("listbox")).toBeInTheDocument();

  userEvent.click(screen.getByText("Opt 2"));
  expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  expect(onChange).toHaveBeenCalledTimes(1);
});

test("Open options and select another one (Uncontrolled)", () => {
  render(<Select options={mockOptions} defaultValue="default" />);
  expect(screen.getByRole("button")).toBeInTheDocument();

  userEvent.click(screen.getByRole("button"));
  expect(screen.getByRole("listbox")).toBeInTheDocument();

  userEvent.click(screen.getByText("Opt 2"));
  expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  expect(screen.getByRole("button")).toHaveTextContent("Opt 2");
});
