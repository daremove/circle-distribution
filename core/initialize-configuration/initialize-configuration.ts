import checkCirclesIntersection from "../check-circles-intersection/check-circles-intersection";
import checkOutOfBound from "../check-out-of-bound/check-out-of-bound";
import { Circle, Configuration, InitialCircles } from "../typings";

function initializeConfiguration([r1, r2]: InitialCircles, width: number, height: number): Configuration | Error {
  const circle1: Circle = { x: r1, y: r1, radius: r1 };

  if (checkOutOfBound(width, height, circle1)) {
    throw new Error(`Incorrect dimensions specified, width: ${width}, height: ${height}, circle radius: ${r1}`);
  }

  let circle2: Circle = { x: circle1.x + circle1.radius + r2, y: r2, radius: r2 };

  if (!checkOutOfBound(width, height, circle2)) {
    return [circle1, circle2];
  } else {
    circle2 = { x: r2, y: circle1.y + circle1.radius + r2, radius: r2 };
  }

  if (!checkOutOfBound(width, height, circle2)) {
    return [circle1, circle2];
  } else {
    circle2 = { x: width - r2, y: height - r2, radius: r2 };
  }

  if (!checkOutOfBound(width, height, circle2) && !checkCirclesIntersection(circle1, circle2)) {
    return [circle1, circle2];
  } else {
    throw new Error(`Incorrect dimensions specified, width: ${width}, height: ${height}, circle radius: ${r2}`);
  }
}

export default initializeConfiguration;
