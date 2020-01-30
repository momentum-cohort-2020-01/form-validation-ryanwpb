let form = document.querySelector("#parking-form");
let inputs = document.querySelectorAll("input");
let fields = document.querySelectorAll(".input-field");
let inputName = document.querySelector("#name");
let cvv = document.querySelector("#cvv");
console.log(cvv);

form.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log(event);
  console.log(event.target);
  for (let i = 0; i < fields.length; i++) {
    if (inputs[i].value.length === 0) {
      fields[i].classList.add("input-invalid");
      let span = document.createElement("span");
      fields[i].appendChild(span);
      span.classList.add("error");
      span.innerHTML = "Not valid form entry.";
    } else fields[i].classList.add("input-valid");
  }
});

// formData
// let data = new FormData(document.querySelector("#parking-form"));
// for (let val of data.values()) {
//   console.log(val);
// }
