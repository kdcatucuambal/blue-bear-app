export const validateEmail = (email: string): boolean=>{
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return !!regexEmail.exec(email);
}

export const validatePassword = (password: string): boolean=>{
  const regexPwd  = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\S]{8,}$/;
  return !!regexPwd.exec(password);
}
