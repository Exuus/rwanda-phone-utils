import { TelcoInitials } from "constants";

export interface TelcoType {
  label: 'MTN' |  'Airtel';
  value: typeof TelcoInitials[number]
}