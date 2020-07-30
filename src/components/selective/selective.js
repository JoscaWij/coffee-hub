import "./selective.css";
import { createElement } from "../../utils";

export function createSelection() {
  const selection = createElement("ul", {
    className: "selective",
  });

  const coffees = ["Espresso", "Cappuccino", "Macciato", "Mocha", "Latte"];

  coffees.forEach((titel) => {
    const listItem = createElement("li", {
      innerText: titel,
    });
    selection.append(listItem);
  });
  return selection;
}
