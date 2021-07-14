export default {
    prefix: "250",
    shortLength: 9,
    fullLength: 12,
    format: "(+250) 7XX XXX XXX",
    short: "7XXXXXXXX",
    dashed: "07X-XXX-XXXX",
    telcos: [
        { value: "78", label: "MTN" },
        { value: "79", label: "MTN" },
        { value: "72", label: "Airtel" },
        { value: "73", label: "Airtel" },
    ],
    errors: {
        short: "Phone number is too short",
        invalid: "Phone number is invalid",
    },
};
export const TelcoInitials = ["78", "79", "72", "73"];
// TODO: add type for this object
//# sourceMappingURL=index.js.map