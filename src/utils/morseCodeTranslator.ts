import { morseCodeMap } from "../data/morseCodeMap";

export const convertToMorse = function (string: string) {
  const charsArray: string[] = string.toUpperCase().split("");

  return charsArray
    .map(function (char: string) {
      return morseCodeMap[char] ? morseCodeMap[char] : char;
    })
    .join("");
};
