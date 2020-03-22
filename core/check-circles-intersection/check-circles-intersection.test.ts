import { Circle } from "../typings";
import checkCirclesIntersection from "./check-circles-intersection";

describe("Checking the correct behavior of the function checkCirclesIntersection", (): void => {
  it("Circles don't intersect", (): void => {
    const testCircle1: Circle = { x: 2, y: 3, radius: 5 };
    const testCircle2: Circle = { x: 10, y: 11, radius: 3 };

    expect(checkCirclesIntersection(testCircle1, testCircle2)).toBe(false);
  });

  it("Circles intersect", (): void => {
    const testCircle1: Circle = { x: 2, y: 3, radius: 5 };
    const testCircle2: Circle = { x: 4, y: 10, radius: 3 };
    const testCircle3: Circle = { x: 6, y: 3, radius: 5 };
    const testCircle4: Circle = { x: 3, y: 10, radius: 3 };

    expect(checkCirclesIntersection(testCircle1, testCircle2)).toBe(true);
    expect(checkCirclesIntersection(testCircle3, testCircle4)).toBe(true);
  });
});
