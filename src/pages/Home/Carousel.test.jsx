import { Carousel } from "./Carousel";
import { render } from "../../utils/test-utils";
describe("Carousel Component", () => {
  it("should render the initial slides", () => {
    render(<Carousel />);
  });

  it("should change slides after 4 seconds", async () => {
    render(<Carousel />);
    await new Promise((resolve) => setTimeout(resolve, 4000));
  });
});
