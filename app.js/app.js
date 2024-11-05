const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number:${phone.value} <br> Message: ${mess.value}`;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "cormiso61mittrew@gmail.com",
    Password: "FF5C034E4BB0DA27A30CCBA2812D369A0A05",
    To: "cormiso61mittrew@gmail.com",
    From: "cormiso61mittrew@gmail.com",
    Subject: subject.value,
    Body: bodyMessage,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Succes !",
        text: "Съобщението е изпратено успешно!",
        icon: "success",
      });
    }
  });
}

// function checkInputs() {
//   const items = document.querySelectorAll(".text-input");

//   for (const item of items) {
//     if (item.value == "") {
//       item.classList.add("err");
//     }

//     item.addEventListener("keyup", () => {
//       console.log(item.value);
//       if (item.value == !"") {
//         item.classList.add("err");
//       } else {
//         item.classList.add("succes");
//       }
//     });
//   }
// }

// function checkEmail() {
//   const emailRegex =
//     /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

//   if (!email.value.match(emailRegex)) {
//     email.classList.add("err");
//   } else {
//     email.classList.remove("err");
//   }
// }

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // checkInputs();

  if (
    !fullName.classList.contains("err") &&
    !email.classList.contains("err") &&
    !phone.classList.contains("err") &&
    !subject.classList.contains("err") &&
    !mess.classList.contains("err")
  ) {
    sendEmail();
  }

  form.reset();
  return false;
});
