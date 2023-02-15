import { NavLink } from "react-router-dom";
import Reviews from "../components/Reviews";

function Download() {
  return (
    <>
      <h1 className="text-center display-5">
        Download{" "}
        <span className="gradient-text-purple">Visual Studio Code</span>
      </h1>
      <p className="text-center lead">
        Free and built on open source. Integrated Git, debugging and extensions.
      </p>

      <div className="container-xxl">
        <div className="col-12 col-xl-10 mx-auto gap-3 d-flex flex-column flex-lg-row justify-content-between">
          <div className="col-12 col-md-10 col-lg-3 d-flex flex-column gap-3 mx-auto">
            <img
              src={require("../images/logos/windows.png")}
              alt="windows-logo"
              className="col-6 mx-auto"
              draggable="false"
            />
            <button className="btn btn-primary lead rounded-0">
              Download For Windows
              <span className="fs-6 lead">
                <br />
                Windows 8, 9, 10
              </span>
            </button>
          </div>

          <div className="col-12 col-md-10 col-lg-3 d-flex flex-column gap-3 mx-auto">
            <img
              src={require("../images/logos/linux.png")}
              alt="windows-logo"
              className="col-6 mx-auto"
              draggable="false"
            />
            <div className="gap-1 d-flex flex-row col-12">
              <button className="btn btn-primary lead rounded-0 col-6">
                Download .deb
                <span className="fs-6 lead">
                  <br />
                  Debain, Ubuntu
                </span>
              </button>
              <button className="btn btn-primary lead rounded-0 col-6">
                Download .rpm
                <span className="fs-6 lead">
                  <br />
                  Red Hat, Fedora, SUSE
                </span>
              </button>
            </div>
          </div>

          <div className="col-12 col-md-10 col-lg-3 d-flex flex-column gap-3 mx-auto">
            <img
              src={require("../images/logos/ios.png")}
              alt="windows-logo"
              className="col-6 mx-auto"
              draggable="false"
            />
            <button className="btn btn-primary lead rounded-0">
              Download For Mac
              <span className="fs-6 lead">
                <br />
                MacOs 10.11+
              </span>
            </button>
          </div>
        </div>
      </div>
      <Reviews />
    </>
  );
}

export default Download;
