import "./Authentication.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks"

const SignUp = () => {
  const { signUp } = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
    fullName: "",
    confirmPassword: ""
  })

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value })
  }

  const submitHandler = async (event) => {
    console.log("signing up");
    event.preventDefault();
    try {
      let status = await signUp(user);
      console.log("signed ");
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="form-section">
      <div className="form-wrapper">
        <h2 className="form-heading">Signup</h2>
        <form action="" method="post">
          <div className="form-username">
            <label for="name">Full Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              required
              onChange={changeHandler}
            />
          </div>
          <div className="form-email">
            <label for="email">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="tanay@neog.camp"
              required
              onChange={changeHandler}
            />
          </div>
          <div className="form-password">
            <label for="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="********"
              required
              onChange={changeHandler}
            />
          </div>
          <div className="form-confirm-password">
            <label for="confirm-password">Confirm Password</label>
            <input
              id="confirm-password"
              type="password"
              placeholder="********"
              required
              onChange={changeHandler}
            />
          </div>
          <div className="user-history">
            <input type="checkbox" id="user-request" />
            <label for="user-request">I accept all Terms & Conditions</label>
          </div>
          <button type="submit" className="btn-submit" onClick={submitHandler}>
            Create New Account
          </button>
        </form>
        <Link to="/login" className="new-account">
          Already have an Account <i className="fas fa-chevron-right"></i>
        </Link>
      </div>
    </section>
  );
};

export { SignUp };
