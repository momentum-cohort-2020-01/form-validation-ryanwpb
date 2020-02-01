let form = document.querySelector("#parking-form");
let fields = document.querySelectorAll(".field");
let fieldCont = document.querySelectorAll(".input-field");
let inputName = document.querySelector("#name");
let cvv = document.querySelector("#cvv");
let yearError = document.createElement("span");

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
    }
  }
  let carParent = document.querySelector("#car-year").parentElement;
  let carYear = document.querySelector("#car-year").value;
  if (isNaN(carYear)) {
    yearError.classList.add("error");
    yearError.innerHTML = "Field must be a number";
    carParent.appendChild(yearError);
    console.log(carParent);
  }
  if (carYear <= 1900 || carYear > 2020) {
    yearError.classList.add("error");
    yearError.innerHTML = "Year not valid!";
    carParent.appendChild(yearError);
  } else if (carYear >= 1900 || carYear <= 2020) {
    carParent.removeChild(yearError);
  }
});
