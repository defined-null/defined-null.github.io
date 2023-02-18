import { NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

/* eslint-disable jsx-a11y/alt-text */

const db = [
  ["GitHub Copilot", "GitHub", "3.6m", 0, 0],
  ["Batch Rename", "JannisX11", "448k", 1, 1],
  ["Gatito Theme", "Paweł", "91k", 1, 2],
  ["Nightwatch", "browserstc", "524k", 1, 3],
  ["Pylance", "Microsoft", "49k", 1, 4],
  ["Tailwind", "evondev", "134k", 1, 5],
  ["Code Issue", "Stepsize", "18k", 1, 6],
  ["Safurai", "Safurai", "195k", 1, 7],
];

const Render_list = React.memo(function Render_list(p) {
  const [open_page, SetOpen_page] = useState("false");
  return (
    <>
      <Modal
        show={open_page !== "false"}
        fullscreen={1}
        onHide={() => {
          SetOpen_page("false");
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title className="container-xxl">{open_page[0]}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: "rgb(239,241,243)" }}>
          <div className="d-sm-flex container-xxl">
            <div className="col-12 col-sm-4 col-md-3 bg-light shadow rounded-4">
              <div className="col-11 mx-auto">
                {" "}
                <img
                  className="col-12 mx-auto p-2"
                  draggable="false"
                  src={require("../images/extensions_images/" +
                    (open_page !== "false" ? open_page[4] : 0) +
                    ".jpg")}
                />
              </div>
            </div>
            <div className="w-100 px-1 px-sm-4 mt-4 mt-sm-0">
              <p className="fw-bold fs-1 m-0">{open_page[0]}</p>
              <p className="fw-bold m-0">
                {open_page[1]}{" "}
                <span className="lead bg-white p-1 rounded">
                  {open_page[2]}
                </span>
              </p>
              <hr />
              <button
                type="button"
                className="col-12 col-sm-3 col-md-2 col-xl-1 btn btn-success text-white"
              >
                Install
              </button>
            </div>
          </div>

          <div className="container-xxl">
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <hr />
          </div>
        </Modal.Body>
      </Modal>

      {db.map((x, id) => (
        <button
          key={id}
          className="border bg-light px-2 shadow d-inline-block text-decoration-none text-dark me-2 me-md-3 me-lg-4 mb-3"
          style={{ width: "140px" }}
          onClick={() => {
            SetOpen_page(x);
          }}
        >
          <div className="col-8 mx-auto mt-3">
            <img
              className="col-12"
              draggable="false"
              src={require("../images/extensions_images/" + x[4] + ".jpg")}
            />
          </div>
          <p className="fw-bold text-center">{x[0]}</p>
          <div className="d-flex lead fs-6">
            <p className="col-6">{x[1]}</p>
            <p className="text-end col-6">{x[2]}</p>
          </div>
          <p className="text-success fw-bold m-0 mb-2 text-end">
            {x[3] === 0 ? "Free Trial" : "Free"}
          </p>
        </button>
      ))}
    </>
  );
});

function Extensions() {
  const [choosen_date, SetChoosen_date] = useState("Today");

  return (
    <div className="container-xxl">
      <h2 className="text-center fw-bold">Extensions for Visual Studio Code</h2>
      <div className="mx-auto col-12 col-md-9 col-xl-7 col-xxl-5 d-flex">
        <input
          type="email"
          className="form-control rounded-0"
          placeholder="Search Visual Studio Code Extensions"
        />
        <button type="button" className="btn btn-primary rounded-0">
          Find!
        </button>
      </div>
      <div className="col-12 col-md-11 mx-auto">
        <p className="fs-4 mt-2 mt-xl-0">Featured</p>
        <Render_list />
        <p className="fs-4 mt-2 mt-xl-0 d-flex">
          Trending
          <Dropdown>
            <Dropdown.Toggle
              variant="light"
              id="dropdown-basic"
              className="btn-link"
            >
              {choosen_date}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  SetChoosen_date("Today");
                }}
              >
                Today
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  SetChoosen_date("This week");
                }}
              >
                This week
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  SetChoosen_date("This month");
                }}
              >
                This month
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </p>
        <Render_list />
        <p className="fs-4 mt-2 mt-xl-0">Most popular</p>
        <Render_list />
      </div>
    </div>
  );
}

export default Extensions;
