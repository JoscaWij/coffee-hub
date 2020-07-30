import "./selective.css";
import { createElement } from "../../utils";
import espressoSrc from "../../assets/Espresso.svg";
import cappuccionoSrc from "../../assets/Cappuccino.svg";
import macciatoSrc from "../../assets/macciato.svg";
import mochaSrc from "../../assets/Mocha.svg";
import latteSrc from "../../assets/latte.svg";

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
    const listItem = createElement("li", {
      innerText: coffee.innerText,
    });
    const img = createElement("img", {
      src: coffee.src,
    });
    listItem.prepend(img);
    selection.append(listItem);
  });

  return selection;
}
