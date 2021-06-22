import constants from "./constants";
import formatted_ from "./formatted";
import telco_ from "./telco";

interface ReturnValues {
  isValid: boolean;
  telco: string | null;
  short: string;
  normalized: string;
  error?: string | null;
  dashed: string;
  formatted: string;
}

const phoneUtils = (
  phoneNumber = "",
  prefix = constants.prefix,
  shortLength = constants.shortLength,
  telcos = constants.telcos
): ReturnValues => {
  let phone = `${phoneNumber}`;
  phone = phone.replace(/[^\d.-]/g, "");

  let telco = null;

  if (phone.length < shortLength) {
    return {
      isValid: false,
      error: constants.errors.short,
      normalized: phone,
      formatted: constants.format,
      telco,
      dashed: constants.dashed,
      short: constants.short,
    };
  }

  const unformatted = `${phone}`.substring(`${phone}`.length - shortLength);

  if (
    telcos.map((telco_) => {
      const r = unformatted.startsWith(`${telco_.value}`);

      if (r) telco = telco_.label;

      return r;
    })
  ) {
    return {
      isValid: true,
      error: null,
      normalized: `${prefix}${unformatted}`,
      formatted: `$(${prefix}) ${unformatted.substr(0, 3)} ${unformatted.substr(
        3,
        3
      )} ${unformatted.substr(6, 3)}`,
      telco,
      short: unformatted,
      dashed: `0${unformatted.substr(0, 3)}-${unformatted.substr(
        3,
        3
      )}-${unformatted.substr(6, 3)}`,
    };
  }

  return {
    isValid: false,
    error: constants.errors.invalid,
    normalized: phone,
    formatted: constants.format,
    telco,
    short: constants.short,
    dashed: constants.dashed,
  };
};

const result = phoneUtils("250785844487").dashed;

console.log({ result });

export const formatted = formatted_;
export const telco = telco_;

export default phoneUtils;
