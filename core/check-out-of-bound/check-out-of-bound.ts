import { Circle } from "../typings";

function checkOutOfBound(width: number, height: number, { x, y, radius }: Circle): boolean {
  return x - radius < 0 || x + radius > width || y - radius < 0 || y + radius > height;
}

export default checkOutOfBound;
