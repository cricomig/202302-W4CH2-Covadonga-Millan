import { render, screen } from "@testing-library/react";
import { FormFirst } from "./form.first";
describe("given a form element", () => {
  describe("when we add a label", () => {
    test("the text appears on screen", () => {
      render(<FormFirst />);
      const linkElement = screen.getByText(/Name/);
      expect(linkElement).toBeInTheDocument();
    });
  });
});
