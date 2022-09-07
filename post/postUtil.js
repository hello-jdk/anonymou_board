const bcrypt = require("bcrypt");

async function passwordEncrypt(password) {
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);
  return hashed;
}

async function passwordValid(incomedPassword, hashedPassword) {
  return await bcrypt.compare(incomedPassword, hashedPassword);
}

module.exports = { passwordEncrypt, passwordValid };
