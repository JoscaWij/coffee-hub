import "./button.css";

export default { title: "Button" };

function createButton(buttonText) {
  const button = document.createElement("button");
  button.className = "btn";
  const text = document.createTextNode(buttonText);
  button.append(text);
  return button;
}

export const addToCart = () => {
  const button = createButton("Add to cart");
  button.addEventListener("click", () => {
    alert("Thanks for shopping");
  });
  return button;
};
