import "./button.css";

export default { title: "Button" };

funktion createButton(buttonText) {
    const button = document.createElement('button');
    button.className ='btn';
    const text = document.createTextNode(buttonText);
    button.append(text);
    return button;
}

export const addToCart = () => {
    const button = crateButton("Add to cart");
    return button;
};
