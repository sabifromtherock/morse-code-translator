import "./main.scss";
import { convertToMorse } from "./utils/morseCodeTranslator";
import { decodeMorseString } from "./utils/decode";

const input = document.querySelector(".input-form__input") as HTMLElement;
const morseCode = document.querySelector(
  ".morse-code__output"
) as HTMLParagraphElement;
const button = document.querySelector("button") as HTMLButtonElement;

let isClicked: boolean = false;

if (!input || !morseCode || !button) throw new Error("Issue with selector");

const handleInput = (event: Event): void => {
  const userInput: string = (event.currentTarget as HTMLInputElement).value;

  if (!isClicked) {
    morseCode.innerHTML = convertToMorse(userInput);
  } else {
    morseCode.innerHTML = decodeMorseString(userInput);
  }
};

const handleChangeTranslation = (): void => {
  isClicked ? (isClicked = false) : (isClicked = true);

  isClicked
    ? (button.innerText = "Morse to text")
    : (button.innerText = "Text to Morse");

  morseCode.innerHTML = "";
};

input.addEventListener("input", handleInput);
button.addEventListener("click", handleChangeTranslation);
