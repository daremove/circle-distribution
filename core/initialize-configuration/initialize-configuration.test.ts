import { InitialCircles } from "../typings";
import initializeConfiguration from "./initialize-configuration";

describe("Checking the correct behavior of the function initializeConfiguration", (): void => {
  it("Correct configuration", (): void => {
    const initCircles: InitialCircles = [10, 20];

    expect(initializeConfiguration(initCircles, 60, 40)).toEqual([
      {
        x: 10,
        y: 10,
        radius: 10
      },
      {
        x: 40,
        y: 20,
        radius: 20
      }
    ]);
    expect(initializeConfiguration(initCircles, 59, 60)).toEqual([
      {
        x: 10,
        y: 10,
        radius: 10
      },
      {
        x: 20,
        y: 40,
        radius: 20
      }
    ]);
    expect(initializeConfiguration(initCircles, 59, 59)).toEqual([
      {
        x: 10,
        y: 10,
        radius: 10
      },
      {
        x: 39,
        y: 39,
        radius: 20
      }
    ]);
  });

  it("Incorrect configuration", (): void => {
    const initCircles: InitialCircles = [10, 20];

    expect((): void => {
      initializeConfiguration(initCircles, 19, 20);
    }).toThrow("Incorrect dimensions specified, width: 19, height: 20, circle radius: 10");
    expect((): void => {
      initializeConfiguration(initCircles, 20, 20);
    }).toThrow("Incorrect dimensions specified, width: 20, height: 20, circle radius: 20");
    expect((): void => {
      initializeConfiguration(initCircles, 50, 50);
    }).toThrow("Incorrect dimensions specified, width: 50, height: 50, circle radius: 20");
  });
});
