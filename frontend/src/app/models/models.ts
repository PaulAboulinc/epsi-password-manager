export interface User{
  email : string;
  password : string;
  firstName : string;
  lastName : string;
  age : number;
  company? : string;
}

export interface PasswordUser{
  label : string,
  password : string
}