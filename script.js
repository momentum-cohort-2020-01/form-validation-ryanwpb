let form = document.querySelector("#parking-form");
let fields = document.querySelectorAll(".field");
let fieldCont = document.querySelectorAll(".input-field");
let inputName = document.querySelector("#name");
let cvv = document.querySelector("#cvv");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log(event);
  console.log(event.target);
  for (let field of fields) {
    if (field.value.length === 0 || field.value === "") {
      if (field.parentElement.classList.contains("input-invalid")) {
      } else {
        field.parentElement.classList.add("input-invalid");
        let span = document.createElement("span");
        span.classList.add("error");
        span.innerHTML = "Field is required.";
        field.parentElement.appendChild(span);
      }
    } else {
      field.parentElement.classList.add("input-valid");
      let required = field.parentElement.querySelector("span");
      if (required) {
        field.parentElement.removeChild(required);
      }
      let YearRegex = "^(0|[1-9][0-9]*)$";
      console.log(YearRegex);
    }
  }
});

form.addEventListener("input", function(event) {
  let carYear = document.querySelector("#car-year");
  console.log(carYear);
});
