const input = document.getElementById("email");
const btn = document.getElementById("btn");
const newsLetter = document.getElementById("newsLetterContainer");
const success = document.getElementById("success");
const isValid = input.validity.valid;
const mail = document.getElementById("mail");
const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

console.log("test", regEx.test("super"));

btn.addEventListener("click", () => {
  if (isValid) {
	if (regEx.test(input.value)) {
	  newsLetter.classList.toggle("hidden");
	  success.classList.toggle("hidden");
	  mail.innerText = input.value;
	}
  }
});

