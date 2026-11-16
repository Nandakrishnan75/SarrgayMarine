import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toImageSrc(img: unknown): string {
  if (typeof img === "string") return img;
  if (img && typeof img === "object" && "src" in img) {
    return String((img as { src: string }).src);
  }
  return "";
}
