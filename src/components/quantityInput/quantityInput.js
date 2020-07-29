import { createButton } from "../button/button";
//const { createButton } = require("../button/button");
//const { default: quantityInputStories } = require("./quantityInput.stories");

export function createQuantityInput() {
  const quantityInput = document.createElement("div");
  quantityInput.className = "quantityInput";

  const btnMinus = createButton("-");
  btnMinus.classList.remove = "btn";
  btnMinus.className = "quantityInput_btnMinus";

  const quantityOutput = document.createElement("p");
  quantityOutput.innerText = 1;
  quantityOutput.className = "quantityOutput";

  const btnPlus = createButton("+");
  btnPlus.classList.remove = "btn";
  btnPlus.className = "quantityInput_btnPlus";

  // add buttons and output to quantityInput
  quantityInput.append(btnMinus);
  quantityInput.append(quantityOutput);
  quantityInput.append(btnPlus);

  // add eventListeners
  btnMinus.addEventListener("click", () => {
    const oldQuantity = Number(quantityOutput.innerText);
    if (oldQuantity === 2) {
      btnMinus.disabled = true;
    }
    if (oldQuantity === 10) {
      btnPlus.disabled = false;
    }
    quantityOutput.innerText = oldQuantity - 1;
  });

  btnPlus.addEventListener("click", () => {
    const oldQuantity = Number(quantityOutput.innerText);
    if (oldQuantity === 1) {
      btnMinus.disabled = false;
    }
    if (oldQuantity === 9) {
      btnPlus.disabled = true;
    }
    quantityOutput.innerText = oldQuantity + 1;
  });

  return quantityInput;
}
