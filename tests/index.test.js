import Home from "../pages";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

// UI render
describe("App", () => {
    it("renders the landing page of the App", () => {
      render(<Home />);
      // check if all components are rendered
      expect(screen.getByTestId("navbar")).toBeInTheDocument();
      expect(screen.getByTestId("homebanner")).toBeInTheDocument();
      expect(screen.getByTestId("calender")).toBeInTheDocument();
    });
  });

  //API call
  describe('expectedData', () => {
    it('checks if returned data from API is rendered into component', async () => {
        render(<Home />);

        await waitFor(() => {
            expect(screen.getByText("/data from the api")).toBeInTheDocument();
        });
    });
});