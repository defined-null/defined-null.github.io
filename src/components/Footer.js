import { NavLink } from "react-router-dom";
import { ReactComponent as LogoText } from "../images/logoText.svg";

function Footer() {
  return (
    <div className="border-top bg-light mt-4 lead fs-6 footer">
      <style>
        {`
          .footer a:hover{
            color: #6c757d !important;
          }
        `}
      </style>
      <div className="container-xl">
        <div className="mx-auto col-12 col-lg-9 d-flex flex-column text-center text-lg-start gap-1 flex-lg-row justify-content-between py-4">
          <NavLink to="/">
            <LogoText />
          </NavLink>
          <div className="d-flex flex-column">
            <p className="text-muted my-0 fw-bold">Product</p>
            <NavLink className="text-dark text-decoration-none" to="/">
              Overview
            </NavLink>
            <NavLink
              className="text-dark text-decoration-none"
              to="/information"
            >
              Information
            </NavLink>
          </div>
          <div className="d-flex flex-column">
            <p className="text-muted my-0 fw-bold">Get Program</p>
            <NavLink className="text-dark text-decoration-none" to="/download">
              Download
            </NavLink>
            <NavLink className="text-dark text-decoration-none" to="/pricing">
              Pricing
            </NavLink>
          </div>
          <div className="d-flex flex-column">
            <p className="text-muted my-0 fw-bold">Blog</p>
            <NavLink className="text-dark text-decoration-none" to="/updates">
              Updates
            </NavLink>
            <NavLink className="text-dark text-decoration-none" to="/faq">
              Faq
            </NavLink>
            <NavLink className="text-dark text-decoration-none" to="/Blog">
              Blog
            </NavLink>
          </div>
          <div className="d-flex flex-column">
            <p className="text-muted my-0 fw-bold">Downloadable</p>
            <NavLink
              className="text-dark text-decoration-none"
              to="/extensions"
            >
              Extensions
            </NavLink>
          </div>
        </div>
        <p className="my-0 pb-4 text-center text-muted fs-5">
          (c) all rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
