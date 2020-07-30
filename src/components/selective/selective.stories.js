import "./selective.css";
import { createSelection } from "./selective";
// import selective from "./selective.html";

export default { title: "Selection (column)" };

export const coffeeSelectionColumn = () => {
  const selection = createSelection();
  return selection;
};
// export const coffeeSelectionColumn = () => selective;
