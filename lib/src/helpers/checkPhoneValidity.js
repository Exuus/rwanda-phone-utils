import constants from "../constants";
export default (phone, phoneTelco) => {
    if (phone.length < constants.shortLength)
        return { isValid: false, message: constants.errors.short };
    return {
        isValid: !!(phoneTelco === null || phoneTelco === void 0 ? void 0 : phoneTelco.label),
        message: constants.errors.invalid,
    };
};
//# sourceMappingURL=checkPhoneValidity.js.map