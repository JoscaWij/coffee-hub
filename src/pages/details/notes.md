# notes from details.stories.js:

## first attemts:

// let message = "Hello fishy";
// alert(message);
// alert("Hello");

// const students = 15;
// const text = `Hello $(students) Fische`;
// alert(text);

export const basic = () => {
useEffect(() => {
// alert("Button!!");
const button = document.querySelector(".btn");
button.addEventListener("click", () => {
//alert(button.innerHTML);
button.innerHTML = "Fische ahoi";
});
});
return "<button class=btn>Hallo Fishys</button>";
};

> !! useEffect is used to "effect" HTML code

## functions: https://github.com/lmachens/coffee-hub/blob/7e037a49dff5f4f476ad28a44a22d2584654b6cf/src/components/button/button.stories.js

# arrow:

() => {

}

# andere Schreibweise:

function name (){

}
