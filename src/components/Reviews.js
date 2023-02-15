function Review() {
  return (
    <>
      {" "}
      <p className="display-1 my-0 py-0 text-center gradient-text user-select-none mt-4">
        ❛❛
      </p>
      <div className="container-fluid d-flex row mx-auto">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mx-auto">
          <div className="card col-12 mx-auto">
            <div className="card-body d-flex flex-column">
              <p>
                VS Code will have deep remote development. You can connect to a
                container running a different OS and use any VS Code plugins,
                linting, debugging for that environment. 🔥🔥🔥
              </p>
              <div className="d-flex">
                <div className="col-2">
                  <img
                    draggable="false"
                    className="img-fluid rounded-circle"
                    src={require("../images/avatars/a1.jpg")}
                    alt="avatar"
                  />
                </div>
                <p className="px-2 my-auto">Jane Jones</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mx-auto mt-4 mt-sm-0">
          <div className="card col-12 mx-auto">
            <div className="card-body d-flex flex-column">
              <p>
                VS Code is my most used and favorite editor. I love being able
                to customize the editor - changing the layout, the icons, fonts
                and color scheme is so easy!
              </p>
              <div className="d-flex">
                <div className="col-2">
                  <img
                    draggable="false"
                    className="img-fluid rounded-circle"
                    src={require("../images/avatars/a2.jpg")}
                    alt="avatar"
                  />
                </div>
                <p className="px-2 my-auto">Jane Jones</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mx-auto d-none d-md-block">
          <div className="card col-12 mx-auto">
            <div className="card-body d-flex flex-column">
              <p>
                I was a vim fan, but then discovered VS Code's Vim plugin, which
                lets me add in my vim keybindings. I can maintain my coding
                style without having to compromise on speed.
              </p>
              <div className="d-flex">
                <div className="col-2">
                  <img
                    draggable="false"
                    className="img-fluid rounded-circle"
                    src={require("../images/avatars/a3.jpg")}
                    alt="avatar"
                  />
                </div>
                <p className="px-2 my-auto">Jane Jones</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mx-auto d-none d-lg-block">
          <div className="card col-12 mx-auto">
            <div className="card-body d-flex flex-column">
              <p>
                VS @code does so many things right. I’m constantly impressed by
                the UX, and customizing workspace / user preferences is no
                exception. 🙌🏼💯 It just keeps getting better ❤️
              </p>
              <div className="d-flex">
                <div className="col-2">
                  <img
                    draggable="false"
                    className="img-fluid rounded-circle"
                    src={require("../images/avatars/a4.jpg")}
                    alt="avatar"
                  />
                </div>
                <p className="px-2 my-auto">Jane Jones</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="display-1 my-0 py-0 text-center gradient-text user-select-none mb-5">
        ❟❟
      </p>
    </>
  );
}

export default Review;
