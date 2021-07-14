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
}
export declare type PhoneNumberType = (phoneNumber: string) => ReturnValues;
declare const phoneUtils: PhoneNumberType;
export declare const format: (phoneNumber: string) => formatType;
export declare const telco: (phoneNumber: string) => string | null;
export declare const isValid: (phoneNumber: string) => boolean;
export declare const dashed: (phoneNumber: string) => formatType;
export declare const normalize: (phoneNumber: string) => formatType;
export declare const short: (phoneNumber: string) => formatType;
export default phoneUtils;
//# sourceMappingURL=index.d.ts.map