const { createButton } = require("../button/button");
const { default: quantityInputStories } = require("./quantityInput.stories");

export function createQuantityInput() {
  const container = document.createElement("div");
  container.className = "quantityInput";

  const btnMinus = createButton("-");
  btnMinus.classList.remove = "btn";
  btnMinus.className = "quantityInput_btnMinus";
  container.append(btnMinus);

  return container;
}
