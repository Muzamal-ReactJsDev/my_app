import * as yup from "yup";
export const validationLogin = yup.object({
  username: yup.string().min(3).max(100).required("username is Required"),
  password: yup.string().min(4).max(100).required("password is Required"),
});
