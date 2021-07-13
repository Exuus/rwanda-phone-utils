interface ReturnValues {
    isValid: boolean;
    telco: string | null;
    short: string;
    normalized: string;
    error?: string | null;
    dashed: string;
    formatted: string;
}
declare const phoneUtils: (phoneNumber?: string, prefix?: string, shortLength?: number, telcos?: {
    value: string;
    label: string;
}[]) => ReturnValues;
export declare const format: (...args: any) => string;
export declare const telco: (...args: any) => string | null;
export declare const isValid: (...args: any) => boolean;
export declare const dashed: (...args: any) => string;
export declare const normalize: (...args: any) => string;
export declare const short: (...args: any) => string;
export default phoneUtils;
//# sourceMappingURL=index.d.ts.map