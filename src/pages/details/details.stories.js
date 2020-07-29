// import { useEffect } from "@storybook/client-api";
import { createButton } from "../../components/button/button";
import { createQuantityInput } from "../../components/quantityInput/quantityInput";
import "./details.css";

export default { title: "Pages/Details" };

export const basic = () => {
  const main = document.createElement("main");
  const quantitySelector = createQuantityInput();
  main.append(quantitySelector);
  const button = createButton("Add to cart");
  main.append(button);

  return main;
};
