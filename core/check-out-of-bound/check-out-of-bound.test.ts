import { Circle } from "../typings";
import checkOutOfBound from "./check-out-of-bound";

describe("Checking the correct behavior of the function checkOutOfBound", (): void => {
  it("Inside the rectangle", (): void => {
    const testCircle: Circle = { x: 15, y: 15, radius: 15 };

    expect(checkOutOfBound(100, 50, testCircle)).toBe(false);
    expect(checkOutOfBound(30, 30, testCircle)).toBe(false);
  });

  it("Outside the rectangle", (): void => {
    const testCircle1: Circle = { x: 2, y: 2, radius: 10 };
    const testCircle2: Circle = { x: 5, y: 5, radius: 2 };

    expect(checkOutOfBound(30, 30, testCircle1)).toBe(true);
    expect(checkOutOfBound(6, 7, testCircle2)).toBe(true);
    expect(checkOutOfBound(7, 6, testCircle2)).toBe(true);
  });
});
