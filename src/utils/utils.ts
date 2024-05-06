
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export function validateUser(user: string): boolean {
  return USER_REGEX.test(user);
}

export function validatePwd(pwd: string): boolean {
  return PWD_REGEX.test(pwd);
}