interface ReturnValues {
  isValid: boolean;
  telco: string | null;
  short: string;
  normalized: string;
  error?: string | null;
  dashed: string;
  formatted: string;
}

declare module "rwanda-phone-utils" {
  export function short(value: string): string;
  export function dashed(value: string): string;
  export function format(value: string): string;
  export function normalize(value: string): string;
  export function telco(value: string): string;
  export function isValid(value: string): string;
  export default function (value: string): ReturnValues;
}
