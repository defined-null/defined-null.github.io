import Prices from "../components/Prices";
import Reviews from "../components/Reviews";

function Information() {
  return (
    <>
      <div className="container-xxl">
        <div className="mx-auto">
          <h1 className="display-3 text-center fw-bold ">
            Why <span className="gradient-text-orange">VS Code</span>?
          </h1>
          <h2 className="text-center gradient-text display-5">
            /It’s how you make software/
          </h2>

          <div className="d-flex mt-5 col-12 col-xl-10 mx-auto flex-xl-row flex-column">
            <div className="col-12 col-xl-5 me-auto my-auto text-center text-xl-start">
              <h3 className="gradient-text-purple fw-bold">
                Collaborate and code remotely
              </h3>
              <p className="lead">
                Work together remotely with your teachers or classmates using
                the free LiveShare extension. Edit and debug your code in
                real-time, and use the chat and call features to ask questions
                or discuss ideas together. Whether you're working on a group
                assignment or teaching a lesson, you can invite multiple people
                to join your session and code together.
              </p>
            </div>

            <img
              className="col-12 col-xl-6 gradient-shadow-box rounded-1 mx-auto"
              src={require("../images/vscode1.png")}
              alt="..."
              draggable="false"
            />
          </div>

          <div className="d-flex mt-5 col-12 col-xl-10 mx-auto flex-xl-row flex-column">
            <img
              className="gradient-shadow-box rounded-1 col-5 me-auto m-auto d-xl-block d-none"
              src={require("../images/code_to_learn.jpg")}
              alt="..."
              draggable="false"
            />

            <div className="col-12 col-xl-5 my-auto text-center text-xl-start">
              <h3 className="gradient-text fw-bold">Code to learn</h3>
              <p className="lead">
                New to coding? Visual Studio Code highlights keywords in your
                code in different colors to help you easily identify coding
                patterns and learn faster. You can also take advantage of
                features like IntelliSense and Peek Definition, which help you
                understand how functions can be used, and how they relate to one
                another.
              </p>
            </div>
          </div>

          <h4 className="text-center fw-bold fs-1 mt-5 gradient-text mb-0">
            Fix <span className="gradient-text-red">errors</span> as you code
          </h4>
          <p className="text-center col-10 mx-auto lead">
            As you code, Visual Studio Code gives you suggestions to complete
            lines of code and quick fixes for common mistakes. You can also use
            the debugger in VS Code to step through each line of code and
            understand what is happening. Check out guides on how to use the
            debugger if you're coding in Python, Java, and
            JavaScript/TypeScript/Node.js.
          </p>
        </div>
        <Prices />
      </div>
      <Reviews />
    </>
  );
}

export default Information;
