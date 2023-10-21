import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Metodo para concatenar las clases de estilos
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}