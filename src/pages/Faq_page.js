import Accordion from "react-bootstrap/Accordion";
import { NavLink } from "react-router-dom";

function Faq_pages() {
  return (
    <div className="container-xxl">
      <div className="col-12 col-lg-11 col-xl-10 col-xxl-9 gradient-inner-color-box py-5 rounded-1 shadow mx-auto">
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
                IntelliSense is Microsoft's implementation of code completion,
                best known in Visual Studio. It was first introduced as a
                feature of a mainstream Microsoft product in 1996 building on
                many already invented concepts of code completion and syntax
                checking, with the Visual Basic 5.0 Control Creation Edition,
                which was essentially a publicly available prototype for Visual
                Basic 5.0. Initially, Visual Basic IDE was the primary "test
                bed" for the technology, but IntelliSense was incorporated into
                Visual FoxPro and Visual C++ in the Visual Studio 97 timeframe
                (one revision after first seen in Visual Basic). Because it was
                based on the introspection capabilities of COM, the Visual Basic
                versions of IntelliSense were always more robust and complete
                than the 5.0 and 6.0 (97 and 98 in the Visual Studio naming
                sequence) versions of Visual C++, which did not have the benefit
                of being entirely based on COM. These shortcomings (criticized
                by many VC++ developers since the 97 release) have been largely
                corrected in the .NET product lines. For example, one of the
                most requested capabilities missing from the pre-.NET products
                was support for templates, which is now fully implemented.
              </p>
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
                Increase the power of Visual Studio Code through Extensions The
                features that Visual Studio Code includes out-of-the-box are
                just the start. VS Code extensions let you add languages,
                debuggers, and tools to your installation to support your
                development workflow. VS Code's rich extensibility model lets
                extension authors plug directly into the VS Code UI and
                contribute functionality through the same APIs used by VS Code.
                This article explains how to find, install, and manage VS Code
                extensions from the Visual Studio Code Marketplace.
              </p>
              <NavLink to="/faq" className="btn btn-primary">
                Open Extensions page
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
                One of the key features of Visual Studio Code is its great
                debugging support. VS Code's built-in debugger helps accelerate
                your edit, compile, and debug loop.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item
            eventKey="3"
            className="rounded-1 text-dark border border-1 shadow-sm rounded-0"
          >
            <Accordion.Header>Multi-root Workspaces</Accordion.Header>
            <hr className="m-0" />
            <Accordion.Body>
              <p className="text-muted">
                You can work with multiple project folders in Visual Studio Code
                with multi-root workspaces. This can be helpful when you are
                working on several related projects at one time. For example,
                you might have a repository with a product's documentation that
                you like to keep current when you update the product source
                code.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item
            eventKey="4"
            className="rounded-1 text-dark border border-1 shadow-sm rounded-0"
          >
            <Accordion.Header>Lorem Ipsum-1</Accordion.Header>
            <hr className="m-0" />
            <Accordion.Body>
              <p className="text-muted">
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item
            eventKey="5"
            className="rounded-1 text-dark border border-1 shadow-sm rounded-0"
          >
            <Accordion.Header>Lorem Ipsum-2</Accordion.Header>
            <hr className="m-0" />
            <Accordion.Body>
              <p className="text-muted">
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item
            eventKey="6"
            className="rounded-1 text-dark border border-1 shadow-sm rounded-0"
          >
            <Accordion.Header>Lorem Ipsum-3</Accordion.Header>
            <hr className="m-0" />
            <Accordion.Body>
              <p className="text-muted">
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item
            eventKey="7"
            className="rounded-1 text-dark border border-1 shadow-sm rounded-0"
          >
            <Accordion.Header>Lorem Ipsum-4</Accordion.Header>
            <hr className="m-0" />
            <Accordion.Body>
              <p className="text-muted">
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default Faq_pages;
