"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __importDefault(require("../constants"));
exports.default = (phone, phoneTelco) => {
    if (phone.length < constants_1.default.shortLength)
        return { isValid: false, message: constants_1.default.errors.short };
    return {
        isValid: !!(phoneTelco === null || phoneTelco === void 0 ? void 0 : phoneTelco.label),
        message: constants_1.default.errors.invalid,
    };
};
//# sourceMappingURL=checkPhoneValidity.js.map