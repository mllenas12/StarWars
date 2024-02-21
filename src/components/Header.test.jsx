import Header from "./Header";
import { render, screen } from "../utils/test-utils";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { BrowserRouter as Router } from "react-router-dom";

describe("Render Header Component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );
  });
  test("should render the star wars logo", () => {
    const imageElement = screen.getByAltText(/star wars logo/i);
    expect(imageElement).toBeInTheDocument();
  });

  test("should render social media logos when screen size is greater or equal to md", () => {
    window.innerWidth = 768;
    const socialMediaIcons = screen.getByTestId("social-media-icons");
    expect(socialMediaIcons).toBeInTheDocument();
  });
});
