import constants from "./constants";
import formatted_ from "./formatted";
import telco_ from "./telco";
import isValid_ from './isValid';
import dashed_ from './dashed';
import normalized_ from './normalized';
import short_ from './short';

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

export const formatted = formatted_;
export const telco = telco_;
export const isValid = isValid_;
export const dashed = dashed_;
export const normalized = normalized_;
export const short = short_;

export default phoneUtils;
