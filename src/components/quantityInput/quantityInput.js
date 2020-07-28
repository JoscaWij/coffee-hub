const { createButton } = require("../button/button");
const { default: quantityInputStories } = require("./quantityInput.stories");

export function createQuantityInput() {
  const container = document.createElement("div");
  container.className = "quantityInput";

  const btnMinus = createButton("-");
  btnMinus.classList.remove = "btn";
  btnMinus.className = "quantityInput_btnMinus";
  container.append(btnMinus);

  const quantityOutput = document.createElement("p");
  quantityOutput.innerText = 1;
  quantityOutput.className = "quantityOutput";
  container.append(quantityOutput);

  const btnPlus = createButton("+");
  btnPlus.classList.remove = "btn";
  btnPlus.className = "quantityInput_btnPlus";
  container.append(btnPlus);

  btnMinus.addEventListener("click", () => {
    const oldQuantity = Number(quantityOutput.innerText);
    if (oldQuantity === 2) {
      btnMinus.disabled = true;
    }
    quantityOutput.innerText = oldQuantity - 1;
  });

  btnPlus.addEventListener("click", () => {
    const oldQuantity = Number(quantityOutput.innerText);
    quantityOutput.innerText = oldQuantity + 1;
  });

  return container;
}
