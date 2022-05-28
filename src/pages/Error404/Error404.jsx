import { useNavigate } from "react-router-dom";
import { image404 } from "../../assets";
import "./Error404.css";

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <main>
      <section className="error-404-page">
        <div className="img-container-404">
          <img
            className="img-responsive image-404"
            src={image404}
            alt="404-page"
          />
          <button
            className="btn btn-solid-primary home-btn"
            onClick={() => navigate("/")}
          >
            Return to Home
          </button>
        </div>
      </section>
    </main>
  );
};

export { Error404 };
