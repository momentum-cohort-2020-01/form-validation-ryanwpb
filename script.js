let form = document.querySelector("#parking-form");
let fields = document.querySelectorAll(".field");
let fieldCont = document.querySelectorAll(".input-field");
let inputName = document.querySelector("#name");
let yearError = document.createElement("span");
let dayError = document.createElement("span");

form.addEventListener("submit", function(event) {
  event.preventDefault();
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
  }
  if (carYear <= 1900 || carYear > 2020) {
    yearError.classList.add("error");
    yearError.innerHTML = "Year not valid!";
    carParent.appendChild(yearError);
  } else if (carYear >= 1900 || carYear < 2020) {
    yearError.parentElement.removeChild(yearError);
  }
  let dayParent = document.querySelector("#days").parentElement;
  let dayNum = document.querySelector("#days").value;
  if (isNaN(dayNum)) {
    dayError.classList.add("error");
    dayError.innerHTML = "Entry must be a number between 1 & 30";
    dayParent.appendChild(dayError);
  } else if (dayNum > 30 || dayNum == 0) {
    dayError.classList.add("error");
    dayError.innerHTML = "Entry must be a number between 1 & 30";
    dayParent.appendChild(dayError);
  } else {
    return;
  }
  const cvvInput = document.querySelector("#cvv");
  console.log(cvvInput);
});
