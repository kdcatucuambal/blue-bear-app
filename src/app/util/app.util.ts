export const validateEmail = (email: string): boolean=>{
  //const regexEmail = /^([\da-z_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return !!regexEmail.exec(email);
}

export const validatePassword = (password: string): boolean=>{
  const regexPwd  = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
  return !!regexPwd.exec(password);
}
