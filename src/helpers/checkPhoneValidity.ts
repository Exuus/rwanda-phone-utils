import constants from "../constants";
import { TelcoType } from "interface";

export default (
  phone: string,
  phoneTelco?: { label: string; value: TelcoType }
): { isValid: boolean; message: string } => {
  if (phone.length < constants.shortLength)
    return { isValid: false, message: constants.errors.short };
  if (phone.length >= constants.fullLength && !phone.startsWith(constants.prefix))
    return { isValid: false, message: constants.errors.invalid };
  return {
    isValid: !!phoneTelco?.label,
    message: constants.errors.invalid,
  };
};
