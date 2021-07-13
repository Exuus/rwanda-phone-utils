import constants from "./constants";
import formatted_ from "./formatted";
import telco_ from "./telco";
import isValid_ from "./isValid";
import dashed_ from "./dashed";
import normalized_ from "./normalized";
import short_ from "./short";
const phoneUtils = (phoneNumber = "", prefix = constants.prefix, shortLength = constants.shortLength, telcos = constants.telcos) => {
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
    const phoneTelco = telcos.find((t) => unformatted.startsWith(`${t.value}`));
    if (![null, undefined, ""].includes(phoneTelco === null || phoneTelco === void 0 ? void 0 : phoneTelco.value)) {
        telco = phoneTelco === null || phoneTelco === void 0 ? void 0 : phoneTelco.label;
    }
    if (telco) {
        return {
            isValid: true,
            error: null,
            normalized: `${prefix}${unformatted}`,
            formatted: `+(${prefix}) ${unformatted.substr(0, 3)} ${unformatted.substr(3, 3)} ${unformatted.substr(6, 3)}`,
            telco,
            short: unformatted,
            dashed: `0${unformatted.substr(0, 3)}-${unformatted.substr(3, 3)}-${unformatted.substr(6, 3)}`,
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
export const format = formatted_;
export const telco = telco_;
export const isValid = isValid_;
export const dashed = dashed_;
export const normalize = normalized_;
export const short = short_;
export default phoneUtils;
//# sourceMappingURL=index.js.map