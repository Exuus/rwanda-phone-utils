import constants from "./constants";
import formatted_ from "./formatted";
import telco_ from "./telco";
import isValid_ from "./isValid";
import dashed_ from "./dashed";
import normalized_ from "./normalized";
import short_ from "./short";
import splitByIndex from "./helpers/splitByIndex";
import checkPhoneValidity from "./helpers/checkPhoneValidity";

type formatType = string | null;
interface ReturnValues {
  isValid: boolean;
  telco: string | null;
  short: formatType;
  normalized: formatType;
  error?: string | null;
  dashed: formatType;
  formatted: formatType;
  unformatted: formatType;
  // format: () =>
}

export type PhoneNumberType = (phoneNumber: string) => ReturnValues;

const phoneUtils: PhoneNumberType = (phoneNumber) => {
  const phone = phoneNumber.replace(/[^\d.-]/g, "");
  const unformatted = `${phone}`.substring(
    `${phone}`.length - constants.shortLength
  );
  const phoneTelco = constants?.telcos.find((t) =>
    unformatted.startsWith(`${t.value}`)
  );
  const { isValid, message: errorMessage } = checkPhoneValidity(
    phone,
    phoneTelco
  );

  return {
    isValid,
    error: isValid ? null : errorMessage,
    normalized: isValid ? `250${unformatted}` : null,
    formatted: isValid
      ? `+(${constants.prefix}) ${splitByIndex(unformatted, 3)}`
      : null,
    unformatted: isValid ? `${constants.prefix}${unformatted}` : null,
    telco: phoneTelco ? phoneTelco?.label : null,
    short: isValid ? unformatted : null,
    dashed: isValid
      ? `+(${constants.prefix})-${splitByIndex(unformatted, 3, "dash")}`
      : null,
    // format:
  };
};

export const format = formatted_;
export const telco = telco_;
export const isValid = isValid_;
export const dashed = dashed_;
export const normalize = normalized_;
export const short = short_;

export default phoneUtils;

// TODO
// - configure eslint and prettier
// - refactor format
// - add all possible format
