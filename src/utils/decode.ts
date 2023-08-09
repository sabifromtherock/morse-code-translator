import { morseCodeMap } from "../data/morseCodeMap";

const decodeMorseChar = (morseChar: string): string | undefined => {
  const letter = Object.keys(morseCodeMap).find((key) => {
    return morseCodeMap[key] === morseChar;
  });
  return letter;
};

export const decodeMorseString = (morseString: string): string => {
  const morseWords: string[] = morseString.trim().split("  "); // Split into words
  const decodedWords: string[] = [];

  for (const morseWord of morseWords) {
    const morseChars: string[] = morseWord.split(" "); // Split into characters
    const decodedChars: string[] = [];

    for (const morseChar of morseChars) {
      const decodedChar = decodeMorseChar(morseChar);
      if (decodedChar) decodedChars.push(decodedChar);
    }

    decodedWords.push(decodedChars.join(""));
  }

  return decodedWords.join(" ");
};
