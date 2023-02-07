import { render, screen } from "@testing-library/react";
import { FormSecond } from "./form.second";

describe("given a form element", () => {
  describe("when we add a label", () => {
    test("the text appears on screen", () => {
      render(<FormSecond></FormSecond>);
      const linkElement = screen.getByText(/Username/);
      expect(linkElement).toBeInTheDocument();
    });
  });
});
