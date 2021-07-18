import constants, { formatTypes } from "./constants";
import formatted_ from "./format";
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
  format: (shape?: formatTypes) => string;
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
    normalized: isValid ? `0${unformatted}` : null,
    formatted: isValid
      ? `+(${constants.prefix}) ${splitByIndex(unformatted, 3)}`
      : null,
    unformatted: isValid ? `${constants.prefix}${unformatted}` : phoneNumber,
    telco: phoneTelco ? phoneTelco?.label : null,
    short: isValid ? unformatted : null,
    dashed: isValid
      ? `+(${constants.prefix})-${splitByIndex(unformatted, 3, "dash")}`
      : null,
    format(shape) {
      return this.isValid ? formatted_(unformatted, shape) : constants.errors.invalid
    },
  };
};

export default phoneUtils;

// TODO
// - configure eslint and prettier
// - refactor format
// - add all possible format
