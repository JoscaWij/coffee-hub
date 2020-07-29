//import { createButton } from "../button/button";
import { createElement } from "../../utils";
import minusSrc from "../../assets/minus.svg";
import plusSrc from "../../assets/plus.svg";

export function createQuantityInput() {
  const quantityInput = createElement("div", {
    className: "quantityInput",
  });

  const btnMinus = createElement("button", {
    className: "quantityInput_btnMinus",
  });

  const minusImage = createElement("img", {
    src: minusSrc,
    alt: "Minus",
  });
  btnMinus.append(minusImage);

  // old version without images

  // const btnMinus = createButton("-");
  // btnMinus.classList.remove = "btn";
  // btnMinus.className = "quantityInput_btnMinus";

  const btnPlus = createElement("button", {
    className: "quantityInput_btnPlus",
  });

  const plusImage = createElement("img", {
    src: plusSrc,
    alt: "Plus",
  });
  btnPlus.append(plusImage);

  // const btnPlus = createButton("+");
  // btnPlus.classList.remove = "btn";
  // btnPlus.className = "quantityInput_btnPlus";

  const quantityOutput = createElement("p", {
    className: "quantityOutput",
    innerText: "1",
  });

  //const quantityOutput = document.createElement("p");
  //quantityOutput.innerText = 1;
  //quantityOutput.className = "quantityOutput";

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
