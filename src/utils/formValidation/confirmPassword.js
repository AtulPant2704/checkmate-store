import { toast } from "react-toastify";

const confirmPasswordHandler = (password, confirmPassword) => {
  if (password !== confirmPassword) {
    toast.error("Your confirm password does not matches the real password");
  } else {
    return true;
  }
};

export { confirmPasswordHandler };
