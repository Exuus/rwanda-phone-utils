import { TelcoType } from "interface";

export default {
  prefix: "250",
  shortLength: 9,
  fullLength: 12,
  format: "(+250) 7XX XXX XXX",
  short: "7XXXXXXXX",
  dashed: "07X-XXX-XXXX",
  telcos: [
    { value: "78", label: "MTN" },
    { value: "79", label: "MTN" },
    { value: "72", label: "Airtel" },
    { value: "73", label: "Airtel" },
  ] as TelcoType[],
  errors: {
    short: "Phone number is too short",
    invalid: "Phone number is invalid",
  },
};

export const TelcoInitials = ["78", "79", "72",  "73"] as const;

export type  formatTypes = "dashed" | "normalized" | "short" | "dashed-short" |  "dashed-normalized" | "dashed-unformatted" | "space"  |  "space-short" |  "space-normalized"  | "space-unformatted"

// TODO: add type for this object
