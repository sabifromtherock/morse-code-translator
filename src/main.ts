import "./main.scss";
import { convertToMorse } from "./utils/morseCodeTranslator";

const input = document.querySelector(".input-form__input") as HTMLElement;
const morseCode = document.querySelector(".morse-code__output");

if (!input || !morseCode) throw new Error("Issue with selector");

const handleInput = (event: Event) => {
  const userInput: string = (event.currentTarget as HTMLInputElement).value;

  morseCode.innerHTML = convertToMorse(userInput);
};

input.addEventListener("input", handleInput);
