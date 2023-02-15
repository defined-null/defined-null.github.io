import { NavLink } from "react-router-dom";
import Faq from "../components/Faq.js";
import Review from "../components/Reviews.js";
import Prices from "../components/Prices.js";

function Mainpage() {
  return (
    <div>
      <div className="col-12">
        <div className="container-xxl">
          <h1 className="text-center display-2 fw-bold">
            The all-in-one tool for
            <br />
            <span className="gradient-text">Thinking and learning</span>
          </h1>
          <p className="text-center text-muted fs-4 col-11 col-md-8 m-auto">
            Essential tools for software developers and teams. Many of the
            world's most dynamic companies and individuals find{" "}
            <span className="gradient-text fw-bold">Visual Studio Code</span>{" "}
            tools make them more creative and effective.
          </p>

          <NavLink
            to="/download"
            className="btn btn-primary mx-auto d-block px-4 mt-3 mt-xl-4 col-9 col-sm-6 col-5 col-md-3 col-xxl-2"
          >
            Get It For Free
          </NavLink>

          <div className="col-12 col-md-11 col-lg-9 col-lx-7 mx-auto gradient-shadow-box my-4 my-xxl-5">
            <img
              className="w-100"
              draggable="false"
              src={require("../images/landing-main.webp")}
              alt="main_landing"
            />
          </div>
        </div>

        <p className="text-center display-4">
          JavaScript development made easy
        </p>
        <Faq />
      </div>

      <Review />

      <div className="container-xl d-flex flex-column flex-xl-row">
        <div className="col-12 col-xl-6 my-auto">
          <p className="display-5 text-center text-xl-start fw-bold gradient-text gradient-inner-color-box mb-1">
            Visual Studio Code
          </p>

          <p className="text-center text-xl-start fs-2 pe-0 pe-lg-4">
            What do you want to{" "}
            <span className="gradient-text fw-bold">
              [code, build, debug, deploy, collaborate on, analyze, learn]
            </span>{" "}
            today? Visual Studio can do that.
          </p>
        </div>

        <img
          className="col-12 col-xl-6 gradient-shadow-box rounded-0"
          draggable="false"
          src={require("../images/landing-main.webp")}
          alt="background"
        />
      </div>

      <Prices />
    </div>
  );
}

export default Mainpage;
