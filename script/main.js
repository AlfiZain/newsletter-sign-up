document.addEventListener("DOMContentLoaded", () => {
  subscribeHandler();
});

const subscribeHandler = () => {
  const newsletterCardElement = document.getElementById("newsletter-card");
  const successMessageElement = document.getElementById("success-message");
  const subscribeForm = document.getElementById("subscribe-form");
  const emailInput = subscribeForm.elements.email;
  const emailHelp = subscribeForm.querySelector(".email-help");
  const dismissButton = document.getElementById("dismiss-button");

  subscribeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    customValidationEmailHandler();
    event.target.reset();
    successMessageHandler();
  });

  const successMessageHandler = () => {
    newsletterCardElement.classList.toggle("hidden");
    successMessageElement.classList.toggle("active");
  };

  const dismissButtonHandler = () => {
    newsletterCardElement.classList.toggle("hidden");
    successMessageElement.classList.toggle("active");
  };

  const customValidationEmailHandler = () => {
    const errorMessage = "Valid email required";
    emailHelp.textContent = "";
    emailInput.setCustomValidity("");

    if (!emailInput.checkValidity()) {
      emailInput.setCustomValidity(errorMessage);
      emailHelp.textContent = errorMessage;
      return;
    }
  };

  emailInput.addEventListener("input", customValidationEmailHandler);
  dismissButton.addEventListener("click", dismissButtonHandler);
};
