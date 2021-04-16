const checkLength = (end, start = 0, name = "") => {
  return (value) => {
    if (value.length < start) return `The length of ${name} is too short`;
    if (value.length > end) return `The length of ${name} is too long`;
  };
};

const checkEmail = (email) => {
  const lengthError = checkLength(40, 5, "email")(email);
  if (lengthError) return lengthError;

  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(String(email).toLowerCase())) return "Incorrect email";
};

const checkPassword = (password) => {
  const lengthError = checkLength(50, 7, "password")(password);
  if (lengthError) return lengthError;
};

const checkName = (name) => {
  const lengthError = checkLength(50, 1, "name")(name);
  if (lengthError) return lengthError;
};

const checkLastname = (lastname) => {
  const lengthError = checkLength(50, 1, "lastname")(lastname);
  if (lengthError) return lengthError;
};

const checkNickname = (nickname) => {
  const lengthError = checkLength(50, 1, "nickname")(nickname);
  if (lengthError) return lengthError;
};

module.exports = ({ name, lastName, nickname, email, password }) => {
  const nameError = checkName(name);
  if (nameError) return nameError;

  const lastnameError = checkLastname(lastName);
  if (lastnameError) return lastnameError;

  const nicknameError = checkNickname(nickname);
  if (nicknameError) return nicknameError;

  const emailError = checkEmail(email);
  if (emailError) return emailError;

  const passwordError = checkPassword(password);
  if (passwordError) return passwordError;
};
