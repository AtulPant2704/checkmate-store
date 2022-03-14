import "./Authentication.css";
import {Link} from "react-router-dom";

const SignUp = () => {
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
            />
          </div>
          <div className="form-email">
            <label for="email">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="tanay@neog.camp"
              required
            />
          </div>
          <div className="form-password">
            <label for="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="********"
              required
            />
          </div>
          <div className="form-confirm-password">
            <label for="confirm-password">Confirm Password</label>
            <input
              id="confirm-password"
              type="password"
              placeholder="********"
              required
            />
          </div>
          <div className="user-history">
            <input type="checkbox" id="user-request" />
            <label for="user-request">I accept all Terms & Conditions</label>
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
  );
};

export { SignUp };
