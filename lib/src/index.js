"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.short = exports.normalize = exports.dashed = exports.isValid = exports.telco = exports.format = void 0;
const constants_1 = __importDefault(require("./constants"));
const formatted_1 = __importDefault(require("./formatted"));
const telco_1 = __importDefault(require("./telco"));
const isValid_1 = __importDefault(require("./isValid"));
const dashed_1 = __importDefault(require("./dashed"));
const normalized_1 = __importDefault(require("./normalized"));
const short_1 = __importDefault(require("./short"));
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
        normalized: isValid ? `0${unformatted}` : null,
        formatted: isValid
            ? `+(${constants_1.default.prefix}) ${splitByIndex_1.default(unformatted, 3)}`
            : null,
        unformatted: isValid ? `${constants_1.default.prefix}${unformatted}` : null,
        telco: phoneTelco ? phoneTelco === null || phoneTelco === void 0 ? void 0 : phoneTelco.label : null,
        short: isValid ? unformatted : null,
        dashed: isValid
            ? `+(${constants_1.default.prefix})-${splitByIndex_1.default(unformatted, 3, "dash")}`
            : null,
        // format:
    };
};
exports.format = formatted_1.default;
exports.telco = telco_1.default;
exports.isValid = isValid_1.default;
exports.dashed = dashed_1.default;
exports.normalize = normalized_1.default;
exports.short = short_1.default;
exports.default = phoneUtils;
// TODO
// - configure eslint and prettier
// - refactor format
// - add all possible format
//# sourceMappingURL=index.js.map