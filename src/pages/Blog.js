/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";

function Blog() {
  const [page, SetPage] = useState(window.location.href.split("#")[1]);

  if (page === undefined) {
    SetPage("last_update");
    window.location.href = window.location.href + "#" + "last_update";
  }

  return (
    <div className="col-12">
      <div className="container-xxl d-md-flex">
        <div className="col-12 col-md-3 col-lg-2">
          <div className="list-group my-3 my-lg-0" id="list-tab" role="tablist">
            <a
              className={
                page === "last_update"
                  ? "active list-group-item list-group-item-action"
                  : "list-group-item list-group-item-action"
              }
              data-bs-toggle="list"
              href="#last_update"
              role="tab"
              aria-controls="last_update"
              onClick={() => {
                SetPage("last_update");
              }}
            >
              Last update
            </a>
            <a
              className={
                page === "about_us"
                  ? "active list-group-item list-group-item-action"
                  : "list-group-item list-group-item-action"
              }
              data-bs-toggle="list"
              href="#about_us"
              role="tab"
              aria-controls="about_us"
              onClick={() => {
                SetPage("about_us");
              }}
            >
              About us
            </a>
          </div>
        </div>
        <div className="container-xxl">
          {page === "last_update" ? (
            <>
              <h2 className="lead fs-4 mt-3 mt-lg-0">Last Update</h2>
              <p className="text-muted">
                Our team has been working Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
              <button type="button" className="btn btn-primary mb-3">
                Learn More
              </button>{" "}
              <br />
              <img
                className="col-12 col-lg-9 col-xl-6"
                draggable="false"
                src={require("../images/blog_gifs/1.gif")}
              />
              <hr />
              <h3 className="lead fs-5">November 2022 </h3>
              <p className="text-muted">
                We have been working the last couple of months to support
                Profiles in VS Code, which is one of the most popular asks from
                the community. This feature is available for preview via the
                workbench .experimental .settingsProfiles .enabled setting. Try
                it out and give us your feedback by creating issues in the
                vscode repository or commenting in issue #116740.
              </p>
              <button type="button" className="btn btn-primary mb-3">
                Learn More
              </button>{" "}
              <br />
              <img
                className="col-12 col-lg-9 col-xl-6"
                draggable="false"
                src={require("../images/blog_gifs/2.gif")}
              />
            </>
          ) : (
            <>
              <h2 className="lead fs-4 mt-3 mt-lg-0">About Us</h2>
              <p className="text-muted">
                We are Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <button type="button" className="btn btn-primary mb-3">
                Learn More
              </button>{" "}
              <br />
              <img
                className="col-12 col-lg-9 col-xl-6"
                draggable="false"
                src={require("../images/blog_gifs/2.gif")}
              />
              <hr />
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <button type="button" className="btn btn-primary">
                Learn More
              </button>
            </>
          )}

          <nav className="mt-4">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <button
                  className="page-link"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Previous
                </button>
              </li>
              <li className="page-item active" aria-current="page">
                <button className="page-link">1</button>
              </li>
              <li className="page-item">
                <button className="page-link">2</button>
              </li>
              <li className="page-item">
                <button className="page-link">3</button>
              </li>
              <li className="page-item">
                <button className="page-link">Next</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Blog;
