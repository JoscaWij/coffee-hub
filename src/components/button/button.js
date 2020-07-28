export function createButton(buttonText) {
  const button = document.createElement("button");
  button.className = "btn";
  const text = document.createTextNode(buttonText);
  button.append(text);
  button.addEventListener("click", () => {
    alert("Thanks for shopping");
  });
  return button;
}
