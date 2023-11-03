import request from "./services/requests";

export default class Forms {
  constructor({ forms, inputsEmail, inputsPhone } = {}) {
    this.forms = document.querySelectorAll(forms);
    this.inputsEmail = document.querySelectorAll(inputsEmail);
    this.inputsPhone = document.querySelectorAll(inputsPhone);
    this.message = {
      loading: "Идет отправка данных...",
      loaded: "Данные успешно отправлены. Мы скорос с Вами свяжемся!",
      error:
        "Произошла ошибка, прошу повторить попытку отправки данных позже...",
    };
  }

  sendingForm() {
    this.forms.forEach((itemForm) => {
      itemForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const data = new FormData(itemForm);

        const infoBlock = document.createElement("div");
        infoBlock.textContent = `${this.message.loading}`;
        infoBlock.style.cssText = `
         color: black;
         font-weight: 900;
         padding-top: 20px;
         text-align: center;
         `;
        itemForm.append(infoBlock);

        request("assets/question.php", data)
          .then((data) => {
            console.log(data);
            infoBlock.textContent = `${this.message.loaded}`;
          })
          .catch((error) => {
            console.log(error);
            infoBlock.textContent = `${this.message.error}`;
          })
          .finally(() => {
            itemForm.reset();
            setTimeout(() => infoBlock.remove(), 5000);
          });
      });
    });
  }

  inputEmail() {
    this.inputsEmail.forEach((input) => {
      input.addEventListener("keypress", (e) => {
        if (e.key.match(/[^a-z 0-9 @]/gi)) {
          e.preventDefault();
        }
      });
    });
  }

  inputPhone(e) {
    let matrix = "+1 (___) __ ___",
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, ""),
      i = 0;

    if (def.length >= val.length) {
      val = def;
    }

    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length
        ? val.charAt(i++)
        : i >= val.length
        ? ""
        : a;
    });

    if (e.type === "blur") {
      if (this.value.length == 2) {
        this.value = "";
      }
    } else {
      let pos = this.value.length,
        elem = this;

      elem.focus();

      if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
      }
    }
  }

  init() {
    this.sendingForm();
    this.inputEmail();

    this.inputsPhone.forEach((input) => {
      input.addEventListener("focus", this.inputPhone);
      input.addEventListener("input", this.inputPhone);
      input.addEventListener("blur", this.inputPhone);
    });
  }
}
