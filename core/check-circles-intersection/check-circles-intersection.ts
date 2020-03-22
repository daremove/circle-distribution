import { Circle } from "../typings";

function checkCirclesIntersection({ x: x1, y: y1, radius: r1 }: Circle, { x: x2, y: y2, radius: r2 }: Circle): boolean {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)) - r1 - r2 < 0;
}

export default checkCirclesIntersection;
