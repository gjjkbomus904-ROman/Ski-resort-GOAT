document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const errors = [];
    const formErrors = document.getElementById("formErrors");

    // Очищаем прежние ошибки
    if (formErrors) {
      formErrors.textContent = "";
    }
    document.querySelectorAll(".input-error").forEach(el => {
      el.classList.remove("input-error");
    });

    // Поля
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const messageField = document.getElementById("message");

    // Проверка имени
    if (!nameField || !nameField.value.trim()) {
      errors.push("Please enter your full name.");
      if (nameField) nameField.classList.add("input-error");
    }

    // Проверка email
    if (!emailField || !emailField.value.trim()) {
      errors.push("Please enter your email address.");
      if (emailField) emailField.classList.add("input-error");
    } else if (!emailField.validity.valid) {
      errors.push("Please enter a valid email format.");
      emailField.classList.add("input-error");
    }

    // Проверка текста сообщения
    if (!messageField || !messageField.value.trim()) {
      errors.push("Please enter your message.");
      if (messageField) messageField.classList.add("input-error");
    }

    // Если есть ошибки → вывести их в aria-live
    if (errors.length > 0) {
      if (formErrors) {
        formErrors.textContent = errors.join(" ");
      }
      return;
    }

    // УСПЕХ (пример)
    if (formErrors) {
      formErrors.textContent = "Your message has been sent successfully!";
    }
  });
});
