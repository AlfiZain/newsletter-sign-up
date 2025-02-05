# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot/Screenshot.png)

### Links

- Live Site URL: [https://alfizain.github.io/newsletter-sign-up/](https://alfizain.github.io/newsletter-sign-up/)

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- CSS Grid
- Mobile-first workflow
- SASS - CSS preprocessor
- Javascript

### What I learned

```scss
&:invalid:not(:placeholder-shown) {
  outline: 1px solid variables.$tomato;
  background-color: lighten(variables.$grey, 35);
  color: variables.$tomato;
}
```

```js
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
```

## Author

- Website - [Muhammad Alfi Zain](https://alfizain.github.io/AlfiZain/)
- Frontend Mentor - [@AlfiZain](https://www.frontendmentor.io/profile/AlfiZain)
