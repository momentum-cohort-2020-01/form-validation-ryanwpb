let form = document.querySelector("#parking-form");
let inputs = document.querySelectorAll("input");
let fields = document.querySelectorAll(".input-field");
let inputName = document.querySelector("#name");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log(event);
  console.log(event.target);
  for (let i = 0; i < fields.length; i++) {
    if (inputs[i].value === "") {
      fields[i].classList.add("input-invalid");
      let span = document.createElement("span");
      fields[i].appendChild(span);
      span.innerHTML = "Not valid form entry.";
    } else if (inputs[i].value.length >= 2) {
      fields[i].classList.add("input-valid");
    }
  }
});
