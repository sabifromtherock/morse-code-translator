import "./main.scss";
import { convertToMorse } from "./utils/morseCodeTranslator";
import { decodeMorseString } from "./utils/decode";

const input = document.querySelector(".input-form__input") as HTMLElement;
const output = document.querySelector(
  ".morse-code__output"
) as HTMLParagraphElement;
const button = document.querySelector("button") as HTMLButtonElement;
const label = document.querySelector("label") as HTMLLabelElement;

let isClicked: boolean = false;

if (!input || !output || !button) throw new Error("Issue with selector");

const handleInput = (event: Event): void => {
  const userInput: string = (event.currentTarget as HTMLInputElement).value;

  if (!isClicked) {
    output.innerHTML = convertToMorse(userInput);
  } else {
    output.innerHTML = decodeMorseString(userInput);
  }
};

const handleChangeTranslation = (): void => {
  isClicked ? (isClicked = false) : (isClicked = true);

  if (isClicked) {
    button.innerText = "Morse to text";
    label.innerText = "Type your Morse code here:";
  } else {
    button.innerText = "Text to Morse";
    label.innerText = "Type your text here:";
  }

  output.innerHTML = "";
};

input.addEventListener("input", handleInput);
button.addEventListener("click", handleChangeTranslation);
