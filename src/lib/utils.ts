import { motion } from "framer-motion";
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

export const getCurrentDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  return { year, month };
};
