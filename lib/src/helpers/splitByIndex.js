const splitByIndex = (value, index, format = "space") => {
    const formatString = format === "space" ? " " : "-";
    if (value.length < index)
        return value;
    return [value.substring(0, index)]
        .concat(splitByIndex(value.substring(index), index, format))
        .filter((chunk) => chunk)
        .join(formatString);
};
export default splitByIndex;
//# sourceMappingURL=splitByIndex.js.map