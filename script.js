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
    }
  }
  let carParent = document.querySelector("#car-year").parentElement;
  let carYear = document.querySelector("#car-year").value;
  if (isNaN(carYear)) {
    let yearError = document.createElement("span");
    yearError.classList.add("error");
    yearError.innerHTML = "Field must be a number";
    carParent.appendChild(yearError);
    console.log(carParent);
  } else if (carYear <= 1900) {
    let yearError = document.createElement("span");
    yearError.classList.add("error");
    yearError.innerHTML = "Your car is too old to park here!";
    carParent.appendChild(yearError);
  }
});
