// import { useEffect } from "@storybook/client-api";
import { createButton } from "../../components/button/button";
import { createQuantityInput } from "../../components/quantityInput/quantityInput";
import "./details.css";
import { createElement } from "../../utils";
import macciatoSrc from "../../assets/macciato.svg";

export default { title: "Pages/Details" };

export const basic = () => {
  const container = createElement("div");
  const header = createElement("header");
  const title = createElement("h2", {
    innerHTML: "Macciato",
  });
  const macciatoImg = createElement("img", {
    src: macciatoSrc,
  });
  const form = createElement("form");
  const quantitySelector = createQuantityInput();
  const button = createButton("Add to cart");

  container.append(header);
  container.append(form);
  header.append(title);
  header.append(macciatoImg);
  form.append(quantitySelector);
  form.append(button);

  return container;
};
