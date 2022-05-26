import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context";
import {
  confirmPasswordHandler,
  passwordValidation,
  emailValidation,
} from "../../utils";
import { signUpService } from "../../services";
import "./Authentication.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
  });
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const { authDispatch } = useAuth();

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const signUpHandler = async (event) => {
    if (
      user.email &&
      user.password &&
      user.firstName &&
      user.lastName &&
      user.confirmPassword
    ) {
      event.preventDefault();
      if (
        emailValidation(user.email) &&
        passwordValidation(user.password) &&
        confirmPasswordHandler(user.password, user.confirmPassword)
      ) {
        try {
          const response = await signUpService(user);
          if (response.status === 201) {
            authDispatch({
              type: "SIGN_UP",
              payload: {
                user: response.data.createdUser,
                token: response.data.encodedToken,
              },
            });
            navigate("/products");
            toast.success("Successfully Signed up");
          } else {
            throw new Error("Something went wrong! Please try again later");
          }
        } catch (error) {
          toast.error(error.response.data.errors[0]);
        }
      }
    }
  };

  return (
    <>
      <section className="form-section">
        <div className="form-wrapper">
          <h2 className="form-heading">Signup</h2>
          <form onSubmit={signUpHandler}>
            <div className="form-username">
              <label htmlFor="first-name">
                First Name <span>*</span>
              </label>
              <input
                id="first-name"
                type="text"
                placeholder="Enter your name"
                name="firstName"
                minLength="3"
                value={user.firstName}
                required
                onChange={changeHandler}
              />
              <label htmlFor="last-name">
                Last Name <span>*</span>
              </label>
              <input
                id="last-name"
                type="text"
                placeholder="Enter your name"
                name="lastName"
                minLength="3"
                value={user.lastName}
                required
                onChange={changeHandler}
              />
            </div>
            <div className="form-email">
              <label htmlFor="email">
                Email address <span>*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="tanay@neog.camp"
                name="email"
                value={user.email}
                required
                onChange={changeHandler}
              />
            </div>
            <div className="form-password input-wrapper">
              <label htmlFor="password">
                Password <span>*</span>
              </label>
              <input
                id="password"
                type="password"
                placeholder="********"
                name="password"
                minLength="8"
                maxLength="16"
                autoComplete="off"
                type={passwordType}
                value={user.password}
                required
                onChange={changeHandler}
              />
              {passwordType === "password" ? (
                <i
                  className="fa-solid fa-eye password-icon"
                  onClick={() => setPasswordType("text")}
                ></i>
              ) : (
                <i
                  className="fa-solid fa-eye-slash password-icon"
                  onClick={() => setPasswordType("password")}
                ></i>
              )}
            </div>
            <div className="form-confirm-password input-wrapper">
              <label htmlFor="confirm-password">
                Confirm Password <span>*</span>
              </label>
              <input
                id="confirm-password"
                type="password"
                placeholder="********"
                name="confirmPassword"
                autoComplete="off"
                type={confirmPasswordType}
                value={user.confirmPassword}
                required
                onChange={changeHandler}
              />
              {confirmPasswordType === "password" ? (
                <i
                  className="fa-solid fa-eye password-icon"
                  onClick={() => setConfirmPasswordType("text")}
                ></i>
              ) : (
                <i
                  className="fa-solid fa-eye-slash password-icon"
                  onClick={() => setConfirmPasswordType("password")}
                ></i>
              )}
            </div>
            <button type="submit" className="btn-submit">
              Create New Account
            </button>
          </form>
          <Link to="/login" className="new-account">
            Already have an Account <i className="fas fa-chevron-right"></i>
          </Link>
        </div>
      </section>
    </>
  );
};

export { SignUp };
