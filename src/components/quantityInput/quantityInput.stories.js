import "./quantityInput.css";
// import quantityInput from "./quantityInput.html";
// import { useEffect } from "@storybook/client-api";

export default { title: "Quantity Selector" };

/*
export const coffeeSelector = () => {
  useEffect(() => {
    // Select buttons here
    const btnMinus = document.querySelector(".quantityInput_btnMinus");
    const quantityOutput = document.querySelector(".quantityOutput");
    const btnPlus = document.querySelector(".quantityInput_btnPlus");
    btnMinus.addEventListener("click", () => {
      const oldQuantity = Number(quantityOutput.innerHTML);
      if (oldQuantity === 2) {
        btnMinus.disabled = true;
      }
      if (oldQuantity === 10) {
        btnPlus.disabled = false;
      }
      quantityOutput.innerHTML = oldQuantity - 1;
    });
    btnPlus.addEventListener("click", () => {
      const oldQuantity = Number(quantityOutput.innerHTML);
      if (oldQuantity === 1) {
        btnMinus.disabled = false;
      }
      if (oldQuantity === 9) {
        btnPlus.disabled = true;
      }
      quantityOutput.innerHTML = oldQuantity + 1;
    });
  });

  return quantityInput;
};
*/
