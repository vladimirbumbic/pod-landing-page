let inputMail = document.getElementById("mail");
let submitBtn = document.getElementById("submitEmail");
let divError = document.getElementById("error");
let regex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (inputMail.value === "") {
    divError.innerHTML = "Oops! Please add your email";
  } else if (!inputMail.value.match(regex)) {
    divError.innerHTML = "Oops! Please check your email";
  }
});
