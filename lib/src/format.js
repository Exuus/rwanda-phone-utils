"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __importDefault(require("./constants"));
const splitByIndex_1 = __importDefault(require("./helpers/splitByIndex"));
exports.default = (unformatted, formatShape) => {
    if (!formatShape)
        return unformatted;
    switch (formatShape) {
        case "dashed":
            return `+(${constants_1.default.prefix})-${splitByIndex_1.default(unformatted, 3, "dash")}`;
        case "dashed-short":
            return `${splitByIndex_1.default(unformatted, 3, "dash")}`;
        case "dashed-normalized":
            return `0${splitByIndex_1.default(unformatted, 3, "dash")}`;
        case "dashed-unformatted":
            return `${constants_1.default.prefix}-${splitByIndex_1.default(unformatted, 3, "dash")}`;
        case "space":
            return `+(${constants_1.default.prefix}) ${splitByIndex_1.default(unformatted, 3, "space")}`;
        case "space-short":
            return `${splitByIndex_1.default(unformatted, 3, "space")}`;
        case "space-normalized":
            return `0${splitByIndex_1.default(unformatted, 3, "space")}`;
        case "space-unformatted":
            return `${constants_1.default.prefix} ${splitByIndex_1.default(unformatted, 3, "space")}`;
        case "normalized":
            return `0${unformatted}`;
        case "unformatted":
            return `250${unformatted}`;
        case "short":
            return unformatted;
        default:
            return "";
    }
};
//# sourceMappingURL=format.js.map