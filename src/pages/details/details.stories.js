// import { useEffect } from "@storybook/client-api";
import { createButton } from "../../components/button/button";
import { createQuantityInput } from "../../components/quantityInput/quantityInput";
import "./details.css";
import { createElement } from "../../utils";
import macciatoSrc from "../../assets/macciato.svg";
import backLink_imgSrc from "../../assets/back.svg";

export default { title: "Pages/Details" };

export const basic = () => {
  const container = createElement("div", {
    className: "details",
  });
  const header = createElement("header");
  const backLink_img = createElement("img", {
    src: backLink_imgSrc,
  });
  const title = createElement("h2", {
    innerHTML: "Macciato",
  });
  const macciatoImg = createElement("img", {
    src: macciatoSrc,
  });
  const form = createElement("form");
  const coffeeName = createElement("div", {
    innerHTML: "<b>Macciato</b>",
  });
  const coffeePrice = createElement("div", {
    innerText: "$2.90",
  });
  coffeeName.append(coffeePrice);
  const quantitySelector = createQuantityInput();
  const coffeeSize = createElement("label", {
    innerText: "Size",
  });
  const coffeeSize_selection = createElement("input");
  coffeeSize.append(coffeeSize_selection);

  const coffeeSugar = createElement("label", {
    innerText: "Sugar",
  });
  const coffeeSugar_selection = createElement("input");
  coffeeSugar.append(coffeeSugar_selection);

  const button = createButton("Add to cart");

  container.append(header);
  container.append(form);
  header.append(backLink_img);
  header.append(title);
  header.append(macciatoImg);
  form.append(coffeeName);
  form.append(quantitySelector);
  form.append(coffeeSize);
  form.append(coffeeSugar);
  form.append(button);

  return container;
};
