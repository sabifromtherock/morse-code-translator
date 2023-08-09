import { decodeMorseString } from "../utils/decode";

describe("decodeMorseString", () => {
  it("should return a string", () => {
    const result = decodeMorseString("abc");
    const expected = "string";
    expect(typeof result).toBe(expected);
  });

  it("should return correct uppercase letter when passed single char in morse code", () => {
    const result = decodeMorseString(".-");
    const expected = "A";
    expect(result).toBe(expected);
  });

  it("should return correct uppercase letter when passed a word in morse code", () => {
    const result = decodeMorseString(".... . .-.. .-.. ---");
    const expected = "HELLO";
    expect(result).toBe(expected);
  });

  it("should return correct uppercase letter when passed multiple word in morse code", () => {
    const result = decodeMorseString(".... . .-.. .-.. ---  ... --- ...");
    const expected = "HELLO SOS";
    expect(result).toBe(expected);
  });
});
