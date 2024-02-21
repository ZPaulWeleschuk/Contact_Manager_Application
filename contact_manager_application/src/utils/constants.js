//first is optional, but if entered, must be 3-25 characters
export const regexFirstName = new RegExp("^[a-zA-Z0-9 -']{3,25}$");
//last is optional, but if entered, must be 2-30 characters
export const regexLastName = new RegExp("^[a-zA-Z0-9 -']{2,30}$");
//email is required and must be a valid email address
export const regexEmail = new RegExp(
  "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$");