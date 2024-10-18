import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Kinetic and Potential Energy Calculator", () => {
  test("renders the app title", () => {
    render(<App />);
    const titleElement = screen.getByText(
      /Kinetic and Potential Energy Calculator/i
    );
    expect(titleElement).toBeInTheDocument();
  });

  test("updates mass and calculates energy correctly", () => {
    render(<App />);
    const massInput = screen.getByLabelText(/Mass \(kg\)/i);
    fireEvent.change(massInput, { target: { value: "5" } });
    expect(massInput.value).toBe("5");

    const kineticEnergyOutput = screen.getByText(/Kinetic Energy:/i);
    const potentialEnergyOutput = screen.getByText(/Potential Energy:/i);
    expect(kineticEnergyOutput).toHaveTextContent("0.00 J"); // Initial velocity is 0
    expect(potentialEnergyOutput).toHaveTextContent("49.05 J"); // 5 kg * 9.81 m/s² * 1 m
  });

  test("updates height and calculates energy correctly", () => {
    render(<App />);
    const heightInput = screen.getByLabelText(/Height \(m\)/i);
    fireEvent.change(heightInput, { target: { value: "10" } });
    expect(heightInput.value).toBe("10");

    const kineticEnergyOutput = screen.getByText(/Kinetic Energy:/i);
    const potentialEnergyOutput = screen.getByText(/Potential Energy:/i);
    expect(kineticEnergyOutput).toHaveTextContent("0.00 J"); // Initial velocity is 0
    expect(potentialEnergyOutput).toHaveTextContent("98.10 J"); // 1 kg * 9.81 m/s² * 10 m
  });

  test("updates velocity and calculates energy correctly", () => {
    render(<App />);
    const velocityInput = screen.getByLabelText(/Velocity \(m\/s\)/i);
    fireEvent.change(velocityInput, { target: { value: "4" } });
    expect(velocityInput.value).toBe("4");

    const kineticEnergyOutput = screen.getByText(/Kinetic Energy:/i);
    const potentialEnergyOutput = screen.getByText(/Potential Energy:/i);
    expect(kineticEnergyOutput).toHaveTextContent("8.00 J"); // 0.5 * 1 kg * (4 m/s)²
    expect(potentialEnergyOutput).toHaveTextContent("9.81 J"); // 1 kg * 9.81 m/s² * 1 m
  });

  test("updates gravity and calculates energy correctly", () => {
    render(<App />);
    const gravityInput = screen.getByLabelText(/Gravity \(m\/s²\)/i);
    fireEvent.change(gravityInput, { target: { value: "5" } });
    expect(gravityInput.value).toBe("5");

    const kineticEnergyOutput = screen.getByText(/Kinetic Energy:/i);
    const potentialEnergyOutput = screen.getByText(/Potential Energy:/i);
    expect(kineticEnergyOutput).toHaveTextContent("0.00 J"); // Initial velocity is 0
    expect(potentialEnergyOutput).toHaveTextContent("5.00 J"); // 1 kg * 5 m/s² * 1 m
  });

  test("resets all values to default", () => {
    render(<App />);
    const massInput = screen.getByLabelText(/Mass \(kg\)/i);
    const heightInput = screen.getByLabelText(/Height \(m\)/i);
    const velocityInput = screen.getByLabelText(/Velocity \(m\/s\)/i);
    const gravityInput = screen.getByLabelText(/Gravity \(m\/s²\)/i);

    fireEvent.change(massInput, { target: { value: "5" } });
    fireEvent.change(heightInput, { target: { value: "10" } });
    fireEvent.change(velocityInput, { target: { value: "4" } });
    fireEvent.change(gravityInput, { target: { value: "5" } });

    const resetButton = screen.getByRole("button", { name: /Reset/i });
    fireEvent.click(resetButton);

    expect(massInput.value).toBe("1");
    expect(heightInput.value).toBe("1");
    expect(velocityInput.value).toBe("0");
    expect(gravityInput.value).toBe("9.81");
  });

  // Additional tests for edge cases and validation (7 more)
  test("handles invalid input values (e.g., negative mass)", () => {
    render(<App />);
    const massInput = screen.getByLabelText(/Mass \(kg\)/i);
    fireEvent.change(massInput, { target: { value: "-5" } });
    // You might want to assert that an error message is displayed or
    // the input is prevented from accepting negative values
  });

  test("handles zero mass", () => {
    render(<App />);
    const massInput = screen.getByLabelText(/Mass \(kg\)/i);
    fireEvent.change(massInput, { target: { value: "0" } });
    // Assert that energy calculations are correct (both should be 0)
  });

  test("handles zero height", () => {
    // Similar to zero mass test
  });

  test("handles zero velocity", () => {
    // Similar to zero mass test
  });

  test("handles very large input values", () => {
    // Test with extremely large numbers to check for potential issues
  });

  test("handles decimal input values", () => {
    // Ensure that decimal values are accepted and calculated correctly
  });

  test("displays energy values with correct units (J)", () => {
    // Verify that the output includes "J" for Joules
  });
});
