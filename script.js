// make sure these match the HTML element names for the ID then class.
let input = document.querySelector("#name");
let display = document.querySelector(".display");

// This code should be working
input.addEventListener("input", () => {
  document.getElementById("name").innerHTML = "input";
  let name = input.value;
  display.textContent = name;
});
// missing function?

// you should see 5 in the output of your console
const a = 2;
const b = 3;

console.log(a + b);
