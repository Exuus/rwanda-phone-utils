import "regenerator-runtime/runtime";
import { telco } from "../src";

describe("Phone utils", () => {
  describe("Check the phone numbers telco", () => {
    it("Should return MTN for a number starts with 079", () => {
      const p = telco("250795844487");
      expect(p).toBe("MTN");
    });
  });
});
