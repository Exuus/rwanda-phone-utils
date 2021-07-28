import "regenerator-runtime/runtime";
import phoneUtils from "../src";
import constants from "../src/constants";

describe("Phone utils", () => {
  describe("Check the phone numbers telco", () => {
    it("Should return MTN for a number starts with 079", () => {
      const p = phoneUtils("250795844487").telco;
      expect(p).toBe("MTN");
    });
  });

  describe("Check validity of badly formated input", () => {
    const validPhones = [
      "+(250) 785-323-292",
      "+250 785 323 292",
      "0 7 8 5 3 2 3 2 9 2",
      "2507-85-3232-92",
    ];
    it("Should return valid for badly formated phone numbers", () => {
      validPhones.forEach((phone) => {
        expect(phoneUtils(phone).isValid).toBe(true);
      });
    });
  });

  describe("Check the phone numbers country code", () => {
    it("Should fail when passing wrong country code", () => {
      const wrongCodes = [
        "+(251) 785-323-292",
        "+256 785 323 292",
        "2917-85-3232-92",
      ];
      wrongCodes.forEach((phone) => {
        expect(phoneUtils(phone).isValid).toBe(false);
      });
    });
  });

  describe("Check the phone numbers format", () => {
    it("Should have a dashed format", () => {
      const p = phoneUtils("250795844487");
      expect(p.dashed).toBe("+(250)-795-844-487");
    });

    it("Should have a formatted format", () => {
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

    it("Should be invalid when adding letters", () => {
      const p = phoneUtils("25078532329a");
      expect(p.isValid).toBeFalsy();
    });
  });

  describe("Check for format function", () => {
    it("Should return default (short) if shape not provided", () => {
      const p = phoneUtils("250795844487").format();
      expect(p).toBe("795844487");
    });

    it("Should have an unformatted format", () => {
      const p = phoneUtils("250795844487").format("unformatted");
      expect(p).toBe("250795844487");
    });

    it("Should have a normalized format", () => {
      const p = phoneUtils("250795844487").format("normalized");
      expect(p).toBe("0795844487");
    });

    it("Should have a short format", () => {
      const p = phoneUtils("250795844487").format("short");
      expect(p).toBe("795844487");
    });

    describe("dashed format", () => {
      it("Should have a dashed format", () => {
        const p = phoneUtils("250795844487").format("dashed");
        expect(p).toBe("+(250)-795-844-487");
      });

      it("Should have a dashed-short format", () => {
        const p = phoneUtils("250795844487").format("dashed-short");
        expect(p).toBe("795-844-487");
      });

      it("Should have a dashed-normalized format", () => {
        const p = phoneUtils("250795844487").format("dashed-normalized");
        expect(p).toBe("0795-844-487");
      });

      it("Should have a dashed-unformatted format", () => {
        const p = phoneUtils("250795844487").format("dashed-unformatted");
        expect(p).toBe("250-795-844-487");
      });
    });

    describe("space format", () => {
      it("Should have a space format", () => {
        const p = phoneUtils("250795844487").format("space");
        expect(p).toBe("+(250) 795 844 487");
      });

      it("Should have a space-short format", () => {
        const p = phoneUtils("250795844487").format("space-short");
        expect(p).toBe("795 844 487");
      });

      it("Should have a space-normalized format", () => {
        const p = phoneUtils("250795844487").format("space-normalized");
        expect(p).toBe("0795 844 487");
      });

      it("Should have a space-unformatted format", () => {
        const p = phoneUtils("250795844487").format("space-unformatted");
        expect(p).toBe("250 795 844 487");
      });
    });
  });
});
