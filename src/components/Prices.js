function Prices() {
  return (
    <>
      {" "}
      <div className="container-xxl mt-4">
        <h2 className="display-2 text-center fw-bold">
          Pricing <span className="gradient-text-orange">Guide</span>
        </h2>
        <p className="text-center text-muted lead fs-4">
          Find the pricing plan that fits your needs
        </p>

        <div className="col-12 col-md-10 mx-auto d-flex justify-content-center gap-3 flex-column flex-lg-row">
          <div className="border shadow p-3 col-12 col-lg-4 col-xxl-3 rounded-2 d-flex flex-column my-0 my-lg-5">
            <p className="fw-bold fs-3">
              <img
                className="me-2"
                style={{ width: "60px" }}
                draggable="false"
                src={require("../images/seed_emoji.png")}
                alt="seed_emoji"
              />
              Individual
            </p>

            <p className="lead fs-6 d-block pb-0 pb-lg-1 h-100">
              A standalone source code editor that runs on Windows, macOS, and
              Linux. The top pick for JavaScript and web developers, with
              extensions to support just about any programming language.
            </p>

            <p>
              <span className="text-success">✓</span> Absolutely Free
            </p>
            <p>
              <span className="text-success">✓</span> All Extensions
            </p>
            <p>
              <span className="text-success">✓</span> Free Updates
            </p>

            <button className="btn btn-primary rounded-1 col-12 d-inline-block">
              Get For Free
            </button>
          </div>

          <div className="border shadow p-3 col-12 col-lg-4 col-xxl-3 rounded-2 d-flex flex-column">
            <p className="fw-bold fs-3">
              <img
                className="me-2"
                style={{ width: "60px" }}
                draggable="false"
                src={require("../images/potted_plant_emoji.png")}
                alt="seed_emoji"
              />
              Business
            </p>

            <p className="lead fs-6 d-block pb-0 pb-lg-1 h-100">
              For small to mid-size organizations with 5 or more users/devices,
              we recommend these subscriptions.
            </p>

            <p>
              <span className="text-success">✓</span> Business Plan
            </p>
            <p>
              <span className="text-success">✓</span> All of free plan
            </p>
            <p>
              <span className="text-success">✓</span> For Small Groups
            </p>

            <button className="btn btn-primary rounded-1 col-12">
              Free Trial
            </button>
          </div>

          <div className="border shadow p-3 col-12 col-lg-4 col-xxl-3 rounded-2 d-flex flex-column my-0 my-lg-5">
            <p className="fw-bold fs-3">
              <img
                className="me-2"
                style={{ width: "60px" }}
                draggable="false"
                src={require("../images/tree_emoji.png")}
                alt="seed_emoji"
              />
              Professional
            </p>

            <p className="lead fs-6 d-block pb-0 pb-lg-1 h-100">
              Scalable, end-to-end solution for teams of any size.
            </p>

            <p>
              <span className="text-success">✓</span> Professional Plan
            </p>
            <p>
              <span className="text-success">✓</span> All of free plan
            </p>
            <p>
              <span className="text-success">✓</span> For Big Groups
            </p>

            <button className="btn btn-primary rounded-1 col-12">
              Free Trial
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Prices;
