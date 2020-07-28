import "./button.css";

export default { title: "Button" };

export const addToCart = () => {
  const button = document.createElement("button");
  button.className("btn");
  button.innerText = "Add to cart";

  return button;
};
