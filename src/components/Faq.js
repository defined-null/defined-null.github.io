import Accordion from "react-bootstrap/Accordion";
import { NavLink } from "react-router-dom";

function Faq() {
  return (
    <>
      {" "}
      <div className="container-xxl px-0">
        <div className="py-3 mx-auto col-12 col-lg-9 gradient-inner-color-box rounded-2s shadow-lg rounded-3">
          <Accordion
            defaultActiveKey={["0"]}
            alwaysOpen
            className="col-11 col-md-8 mx-auto my-5"
          >
            <Accordion.Item
              eventKey="0"
              className="rounded-1 text-dark border border-1 shadow-sm"
            >
              <Accordion.Header>Meet IntelliSense</Accordion.Header>
              <hr className="m-0" />
              <Accordion.Body>
                <p className="text-muted">
                  Go beyond syntax highlighting and autocomplete with
                  IntelliSense, which provides smart completions based on
                  variable types, function definitions, and imported modules.
                </p>
                <NavLink to="/faq" className="btn btn-primary">
                  Learn More About IntelliSense
                </NavLink>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item
              eventKey="1"
              className="rounded-1 text-dark border border-1 shadow-sm"
            >
              <Accordion.Header>Extensions</Accordion.Header>
              <hr className="m-0" />
              <Accordion.Body>
                <p className="text-muted">
                  Want even more features? Install extensions to add new
                  languages, themes, debuggers, and to connect to additional
                  services. Extensions run in separate processes, ensuring they
                  won't slow down your editor. Learn more about extensions.
                </p>
                <NavLink to="/faq" className="btn btn-primary">
                  Learn More About Extensions
                </NavLink>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item
              eventKey="2"
              className="rounded-1 text-dark border border-1 shadow-sm rounded-0"
            >
              <Accordion.Header>Run And Debug</Accordion.Header>
              <hr className="m-0" />
              <Accordion.Body>
                <p className="text-muted">
                  Debug code right from the editor. Launch or attach to your
                  running apps and debug with break points, call stacks, and an
                  interactive console.
                </p>
                <NavLink to="/faq" className="btn btn-primary">
                  Learn More About Debugging
                </NavLink>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default Faq;
