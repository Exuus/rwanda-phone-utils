const splitByIndex = (
  value: string,
  index: number,
  format: "space" | "dash" = "space"
): string => {
  const formatString = format === "space" ? " " : "-";
  if (value.length < index) return value;
  return [value.substring(0, index)]
    .concat(splitByIndex(value.substring(index), index, format))
    .filter((chunk) => chunk)
    .join(formatString);
};

export default splitByIndex;
