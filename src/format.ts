import constants, { formatTypes } from "./constants";
import splitByIndex from "./helpers/splitByIndex";

export default (unformatted: string, formatShape: formatTypes): string => {
  switch (formatShape) {
    case "dashed":
        return `+(${constants.prefix})-${splitByIndex(unformatted, 3, "dash")}`

    case "dashed-short":
        return `${splitByIndex(unformatted, 3, "dash")}`

    case "dashed-normalized":
        return `0${splitByIndex(unformatted, 3, "dash")}`

    case "dashed-unformatted":
        return `${constants.prefix}-${splitByIndex(unformatted, 3, "dash")}`

    case "space":
        return `+(${constants.prefix}) ${splitByIndex(unformatted, 3, "space")}`

    case "space-short":
        return `${splitByIndex(unformatted, 3, "space")}`
  
    case "space-normalized":
        return `0${splitByIndex(unformatted, 3, "space")}`
  
    case "space-unformatted":
        return `${constants.prefix} ${splitByIndex(unformatted, 3, "space")}`
  
    case "normalized":
        return `0${unformatted}`

    case "short":
        return unformatted
  
    default:
      return "";
  }
};
