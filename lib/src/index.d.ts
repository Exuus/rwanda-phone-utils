import { formatTypes } from "./constants";
declare type formatType = string | null;
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
export declare type PhoneNumberType = (phoneNumber: string) => ReturnValues;
declare const phoneUtils: PhoneNumberType;
export default phoneUtils;
//# sourceMappingURL=index.d.ts.map