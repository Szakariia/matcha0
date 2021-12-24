const errorMessage = {
  email: "",
  username: "",
  firstName: "",
  lastName: "",
  password: "",
};

const isEmail = (email) => {
  const emailRegex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;
  if (!email) return { ...errorMessage, email: "no email" };
  else {
    if (email.length > 50) return { ...errorMessage, email: "long email" };
    if (!email.match(emailRegex))
      return { ...errorMessage, email: "invalid email" };
  }

  return 0;
};

const isUsername = (username) => {
  if (!username) return { ...errorMessage, username: "no username" };
  else if (username.length > 50)
    return { ...errorMessage, username: "short username" };
  return 0;
};

const isFirstName = (firstName) => {
  if (!firstName) return { ...errorMessage, firstName: "no firstName" };
  else if (firstName.length > 50)
    return { ...errorMessage, firstName: "short firstName" };
  return 0;
};

const isLastName = (lastName) => {
  if (!lastName) return { ...errorMessage, lastName: "no lastName" };
  else if (lastName.length > 50)
    return { ...errorMessage, lastName: "short lastName" };
  return 0;
};

const isPassword = (password) => {
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
  if (!password) return { ...errorMessage, password: "no password" };
  else {
    if (password.length < 8)
      return {
        ...errorMessage,
        password: "password must at least be 8 characters in length",
      };
    if (!password.match(passwordRegex))
      return {
        ...errorMessage,
        password:
          "password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character",
      };
  }
  return 0;
};

const validator = (data, status) => {
  const { email, username, firstName, lastName, password } = data;
  return status
    ? isUsername(username) || isPassword(password)
    : isEmail(email) ||
        isUsername(username) ||
        isFirstName(firstName) ||
        isLastName(lastName) ||
        isPassword(password);
};

export default validator;
