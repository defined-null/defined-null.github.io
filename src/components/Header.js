import { ReactComponent as LogoText } from "../images/logoText.svg";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { NavLink } from "react-router-dom";
import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ModalShow_function(props) {
  return (
    <>
      <div
        className="position-absolute w-100 h-100"
        style={{
          backdropFilter: "blur(10px)",
          display: props.show ? "block" : "none",
          zIndex: 100,
        }}
      ></div>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter container">
            <LogoText />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className="text-center">Create new account</h4>
          <button type="button" className="col-12 btn btn-primary btn-sm">
            Continue with Google
          </button>
          <button type="button" className="col-12 btn btn-primary btn-sm mt-2">
            Continue with Apple
          </button>
          <hr />

          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label mb-1">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label mb-1">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
              }}
              type="submit"
              className="btn btn-outline-primary col-12"
            >
              Log In
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function Header() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <ModalShow_function show={modalShow} onHide={() => setModalShow(false)} />
      <div className="border-bottom mt-2 mb-lg-3 mb-xl-4 mb-xxl-5">
        <div className="container-xxl">
          <Navbar
            expand="lg"
            className="d-flex justify-content-between align-self-center py-3"
          >
            <NavLink className="navbar-brand" to="/" exact>
              <LogoText />
            </NavLink>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <div className="ms-auto justify-content-between d-flex d-lg-block mt-2 mt-md-3 mt-lg-0 flex-column flex-md-row gap-2">
                <Dropdown className="d-inline-block col-12 col-md-auto">
                  <Dropdown.Toggle
                    id="dropdown-button-product"
                    className="btn btn-light rounded-1 me-0 me-xl-3 p-0 py-2 px-2 px-lg-3 col-12"
                  >
                    Product
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="w-100">
                    <NavLink
                      to="/"
                      className="text-center text-md-start dropdown-item"
                      draggable="false"
                      exact
                    >
                      Overview
                    </NavLink>
                    <li>
                      <hr className="dropdown-divider d-block d-md-none" />
                    </li>
                    <NavLink
                      to="/information"
                      className="text-center text-md-start dropdown-item"
                      draggable="false"
                      exact
                    >
                      Information
                    </NavLink>
                  </Dropdown.Menu>
                </Dropdown>

                <button className="btn btn-light rounded-1 me-0 me-xl-3 p-0">
                  <NavLink
                    to="/download"
                    className="text-dark text-decoration-none w-100 d-block py-2 px-2 px-lg-3"
                    draggable="false"
                    exact
                  >
                    Download
                  </NavLink>
                </button>

                <button className="btn btn-light rounded-1 me-0 me-xl-3 p-0">
                  <NavLink
                    to="/pricing"
                    className="text-dark text-decoration-none w-100 d-block py-2 px-2 px-lg-3"
                    draggable="false"
                  >
                    Pricing
                  </NavLink>
                </button>

                <Dropdown className="d-inline-block col-12 col-md-auto">
                  <Dropdown.Toggle
                    id="dropdown-button-blog"
                    className="btn btn-light rounded-1 me-0 me-xl-3 p-0 py-2 px-2 px-lg-3 col-12"
                  >
                    Blog
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="w-100">
                    <NavLink
                      to="/updates"
                      className="text-center text-md-start dropdown-item"
                      draggable="false"
                      exact
                    >
                      Updates
                    </NavLink>
                    <li>
                      <hr className="dropdown-divider d-block d-md-none" />
                    </li>
                    <NavLink
                      to="/faq"
                      className="text-center text-md-start dropdown-item"
                      draggable="false"
                      exact
                    >
                      Faq
                    </NavLink>
                    <li>
                      <hr className="dropdown-divider d-block d-md-none" />
                    </li>
                    <NavLink
                      to="/blog"
                      className="text-center text-md-start dropdown-item"
                      draggable="false"
                      exact
                    >
                      Blog
                    </NavLink>
                  </Dropdown.Menu>
                </Dropdown>

                <button className="btn btn-light rounded-1 me-0 me-xl-3 p-0">
                  <NavLink
                    to="/extensions"
                    className="text-dark text-decoration-none w-100 d-block py-2 px-2 px-lg-3"
                    draggable="false"
                    exact
                  >
                    Extensions
                  </NavLink>
                </button>

                <button
                  onClick={() => {
                    setModalShow(true);
                  }}
                  className="btn btn-primary rounded-1"
                >
                  Get Started
                </button>
              </div>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </>
  );
}

export default Header;
