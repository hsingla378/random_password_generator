function generatePassword() {
  let length = 15;
  let charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  let genPass = "";
  for (let i = 0; i < length; ++i) {
    genPass += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  return genPass;
}

function generatePasswords() {
  document.getElementById("generatedPassword1").textContent =
    generatePassword();
  document.getElementById("generatedPassword2").textContent =
    generatePassword();
  document.getElementById("generatedPassword3").textContent =
    generatePassword();
  document.getElementById("generatedPassword4").textContent =
    generatePassword();
}
