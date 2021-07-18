"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __importDefault(require("./constants"));
const format_1 = __importDefault(require("./format"));
const splitByIndex_1 = __importDefault(require("./helpers/splitByIndex"));
const checkPhoneValidity_1 = __importDefault(require("./helpers/checkPhoneValidity"));
const phoneUtils = (phoneNumber) => {
    const phone = phoneNumber.replace(/[^\d.-]/g, "");
    const unformatted = `${phone}`.substring(`${phone}`.length - constants_1.default.shortLength);
    const phoneTelco = constants_1.default === null || constants_1.default === void 0 ? void 0 : constants_1.default.telcos.find((t) => unformatted.startsWith(`${t.value}`));
    const { isValid, message: errorMessage } = checkPhoneValidity_1.default(phone, phoneTelco);
    return {
        isValid,
        error: isValid ? null : errorMessage,
        normalized: isValid ? `250${unformatted}` : null,
        formatted: isValid
            ? `+(${constants_1.default.prefix}) ${splitByIndex_1.default(unformatted, 3)}`
            : null,
        unformatted: isValid ? `${constants_1.default.prefix}${unformatted}` : phoneNumber,
        telco: phoneTelco ? phoneTelco === null || phoneTelco === void 0 ? void 0 : phoneTelco.label : null,
        short: isValid ? unformatted : null,
        dashed: isValid
            ? `+(${constants_1.default.prefix})-${splitByIndex_1.default(unformatted, 3, "dash")}`
            : null,
        format(shape) {
            return this.isValid ? format_1.default(unformatted, shape) : constants_1.default.errors.invalid;
        },
    };
};
exports.default = phoneUtils;
// TODO
// - configure eslint and prettier
// - refactor format
// - add all possible format
//# sourceMappingURL=index.js.map