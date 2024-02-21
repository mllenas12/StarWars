import { Films } from "./Films";
import { render, screen, waitFor, act } from "../../utils/test-utils";

describe("Render Films Component", () => {
  test("should render the title", () => {
    render(<Films />);
    expect(screen.getByText(/Films/i)).toBeDefined();
  });

  test("should render no films message when no films are available", async () => {
    render(<Films currentStarship={{ films: [] }} />);
    await waitFor(() =>
      expect(screen.getByText(/No films on board/i)).toBeDefined()
    );
  });

  test("should render film title when loading is false and API fetch is succeeded", async () => {
    const mockFilmsData = {
      films: ["https://swapi.dev/api/films/1/"],
    };

    render(<Films currentStarship={mockFilmsData} />);
    await waitFor(() => expect(screen.queryByText(/loading/i)).toBeFalsy());
    await waitFor(() =>
      expect(screen.getByText(/A NEW HOPE/i)).toBeInTheDocument()
    );
  });

  test("should render film episode when loading is false and API fetch is succeeded", async () => {
    const mockFilmsData = {
      films: ["https://swapi.dev/api/films/1/"],
    };

    render(<Films currentStarship={mockFilmsData} />);
    await waitFor(() => expect(screen.queryByText(/loading/i)).toBeFalsy());
    await waitFor(() =>
      expect(screen.getByText(/Episode 4/i)).toBeInTheDocument()
    );
  });
});
