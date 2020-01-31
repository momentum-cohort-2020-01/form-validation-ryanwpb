let form = document.querySelector("#parking-form");
let fields = document.querySelectorAll(".field");
// let fieldCont = document.querySelectorAll(".input-field");
let inputName = document.querySelector("#name");
let cvv = document.querySelector("#cvv");
console.log(cvv);

form.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log(event);
  console.log(event.target);
  for (let field of fields) {
    if (field.value.length === 0 || field.value === "") {
      field.parentElement.classList.add("input-invalid");
      let span = document.createElement("span");
      field.parentElement.appendChild(span);
      span.classList.add("error");
      span.innerHTML = "Not valid form entry.";
    } else if (field.value.length >= 1) {
      field.parentElement.classList.add("input-valid");
      //   field.parentElement.removeChild(span);
    }
  }
});

// formData
// let data = new FormData(document.querySelector("#parking-form"));
// for (let val of data.values()) {
//   console.log(val);
// }
