import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getPositionEl = (el: HTMLElement) => {
  let totalOffsetX = 0;
  let totalOffsetY = 0;

  while (el) {
    totalOffsetX += el.offsetLeft;
    totalOffsetY += el.offsetTop;
    el = el.offsetParent;
  }
  return { x: totalOffsetX, y: totalOffsetY };
};
