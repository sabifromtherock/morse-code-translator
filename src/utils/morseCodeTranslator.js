const morseCodes = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};
const convertToMorse = function (string) {
  const charsArray = string.toUpperCase().split("");

  return charsArray
    .map(function (char) {
      return morseCodes[char] ? morseCodes[char] : char;
    })
    .join("");
};
