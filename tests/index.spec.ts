import "regenerator-runtime/runtime";
import phoneUtils, { telco } from "../src";
import constants from "../src/constants";

describe("Phone utils", () => {
  describe("Check the phone numbers telco", () => {
    it("Should return MTN for a number starts with 079", () => {
      const p = telco("250795844487");
      expect(p).toBe("MTN");
    });
  });

  describe("Check the phone numbers format", () => {
    it("Should have a dashed format", () => {
      const p = phoneUtils("250795844487");
      expect(p.dashed).toBe("+(250)-795-844-487");
    });

    it("Should have a space format", () => {
      const p = phoneUtils("250795844487");
      expect(p.formatted).toBe("+(250) 795 844 487");
    });

    it("Should have a normalized format", () => {
      const p = phoneUtils("250795844487");
      expect(p.normalized).toBe("250795844487");
    });

    it("Should have a unformatted format", () => {
      const p = phoneUtils("0795844487");
      expect(p.unformatted).toBe("250795844487");
    });

    it("Should have a short format", () => {
      const p = phoneUtils("+250795844487");
      expect(p.short).toBe("795844487");
    });
  });

  describe("Check for invalid phone numbers", () => {
    it("Should be invalid", () => {
      const p = phoneUtils("25079844487");
      expect(p.isValid).toBeFalsy();
      expect(p.error).toBe(constants.errors.invalid);
    });

    it("Should be too short", () => {
      const p = phoneUtils("79844487");
      expect(p.isValid).toBeFalsy();
      expect(p.error).toBe(constants.errors.short);
    });
  });
});
