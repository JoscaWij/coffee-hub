import "./selective.css";
import { createElement } from "../../utils";
import espressoSrc from "../../assets/Espresso.svg";
import cappuccionoSrc from "../../assets/Cappuccino.svg";
import macciatoSrc from "../../assets/macciato.svg";
import mochaSrc from "../../assets/Mocha.svg";
import latteSrc from "../../assets/latte.svg";
import backLink_imgSrc from "../../assets/back.svg";

export function createSelection() {
  const selection = createElement("ul", {
    className: "selective",
  });

  const coffees = [
    { innerText: "Espresso", src: espressoSrc },
    { innerText: "Cappuccino", src: cappuccionoSrc },
    { innerText: "Macciato", src: macciatoSrc },
    { innerText: "Mocha", src: mochaSrc },
    { innerText: "Latte", src: latteSrc },
  ];

  coffees.forEach((coffee) => {
    const listItem = createElement("li");
    const coffeeTitel = createElement("span", {
      innerText: coffee.innerText,
    });
    const img = createElement("img", {
      src: coffee.src,
    });
    const backLink = createElement("a");

    const backLink_img = createElement("img", {
      src: backLink_imgSrc,
    });

    listItem.prepend(img);
    listItem.append(coffeeTitel);
    backLink.append(backLink_img);
    listItem.append(backLink);
    selection.append(listItem);
  });

  return selection;
}
