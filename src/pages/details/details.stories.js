import { useEffect } from "@storybook/client-api";

export default {
  title: "Pages/Details",
};

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

// nice comment
// let message = "Hello fishy";
// alert(message);
// alert("Hello");

// const students = 15;
// const text = `Hello $(students) Fische`;
// alert(text);
