import "./Authentication.css";
import {Link} from "react-router-dom";

const Login = () => {
  return (
    <section className="form-section">
      <div className="form-wrapper">
        <h2 className="form-heading">Login</h2>
        <form action="" method="post">
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
          <div className="user-history">
            <input type="checkbox" id="user-save" />
            <label for="user-save">Remember me</label>
            <Link to="./Put route to forgot password">Forgot your Password?</Link>
          </div>
          <button type="submit" className="btn-submit">
            Submit
          </button>
        </form>
        <Link to="/signup" className="new-account">
          Create New Account <i className="fas fa-chevron-right"></i>
        </Link>
      </div>
    </section>
  );
};

export { Login };
