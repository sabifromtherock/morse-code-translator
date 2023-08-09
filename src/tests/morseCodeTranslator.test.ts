import { convertToMorse } from "../utils/morseCodeTranslator";

describe("convertToMorse", () => {
  it("should return a string", () => {
    const result = convertToMorse("abc");
    const expected = "string";
    expect(typeof result).toBe(expected);
  });

  it("should return correct morse code when passed a single letter", () => {
    const result = convertToMorse("a");
    const expected = ".-";
    expect(result).toBe(expected);
  });

  it("should return correct morse code when passed a single word", () => {
    const result = convertToMorse("hello");
    const expected = "......-...-..---";
    expect(result).toBe(expected);
  });

  it("should return correct morse code when passed multiple words", () => {
    const result = convertToMorse("hello world");
    const expected = "......-...-..--- .-----.-..-..-..";
    expect(result).toBe(expected);
  });

  it("should return correct morse code when passed text contains special character", () => {
    const result = convertToMorse("hello world!");
    const expected = "......-...-..--- .-----.-..-..-..!";
    expect(result).toBe(expected);
  });

  it("should return correct morse code when passed text contains uppercase and lowercase letters", () => {
    const result = convertToMorse("Hello World!");
    const expected = "......-...-..--- .-----.-..-..-..!";
    expect(result).toBe(expected);
  });
});
