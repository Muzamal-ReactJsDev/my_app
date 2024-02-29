import * as yup from "yup";
export const validation = yup.object({
  name: yup.string().min(3).max(100).required("Name is Required"),
  email: yup
    .string()
    .email("email should be valid")
    .required("email is required"),
  password: yup.string().min(4).max(100).required("password is Required"),
  confirm_password: yup
    .string()
    .required("Confirm Password is Reuired")
    .oneOf([yup.ref("password"), null], "password must be Match"),
});
