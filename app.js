const main = document.querySelector("main");
const input = document.querySelector(".input");
const result = document.querySelector("p");
let math;
let op;

input.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    let arr = e.target.value.split(" ");
    switch (arr[1]) {
      case "+":
        math = +arr[0] + +arr[2];
        break;
      case "-":
        math = +arr[0] - +arr[2];
        break;
      case "*":
        math = +arr[0] * +arr[2];
        break;
      case "/":
        math = +arr[0] / +arr[2];
        break;
      case "%":
        math = +arr[0] % +arr[2];
        break;
      default:
        math = "Неверный синтаксис";
        break;
    }
    result.innerText = math;
    console.log(arr);
    console.log(math);
  }
});
