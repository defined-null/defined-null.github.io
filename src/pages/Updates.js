import Accordion from "react-bootstrap/Accordion";
import { NavLink } from "react-router-dom";

function Updates() {
  const table_text = [
    [
      "November 2022",
      "We have been working the last couple of months to support Profiles in VS Code, which is one of the most popular asks from the community. This feature is available for preview via the workbench .experimental .settingsProfiles .enabled setting. Try it out and give us your feedback by creating issues in the vscode repository or commenting in issue #116740.",
    ],
    [
      "October 2022",
      "This update includes support for the upcoming TypeScript 4.9 release. See the TypeScript 4.9 iteration plan for more details on what the TypeScript team is currently working on. Some editor tooling highlights: <br /> <span className='ps-4'> A new Sort Imports command that sorts imports without removing unused ones. </span> <br /> <span className='ps-4'> Running Go to Definition on a return statement now jumps to the function declaration. </span> <br /> <span className='ps-4'> Switch to a new default file watcher, which should perform better. </span> <br /> To start using the TypeScript 4.9 nightly builds, install the TypeScript Nightly extension.",
    ],
    [
      "September 2022",
      "We have been working the last couple of months to support Settings Profiles in VS Code, which is one of the most popular asks from the community. This feature is available for preview via the workbench .experimental .settingsProfiles .enabled setting. Try it out and give us your feedback by creating issues in the vscode repository or commenting in issue #116740.",
    ],
    [
      "August 2022",
      "Tired of accidentally breaking links or images in your Markdown when you move or rename files? Try the new markdown .experimental .updateLinks OnFileMove .enabled setting!",
    ],
    [
      "July 2022",
      "It is now possible to display UI showing which scope the user is in during scrolling. The 'sticky scroll' UI will show which class /interface /namespace /function /method /constructor the top of the editor is in, helping you know the location within a document. Enable sticky scroll with the editor .experimental .stickyScroll .enabled setting.",
    ],
    [
      "June 2022",
      "This update includes support for the upcoming TypeScript 4.8 release. See the TypeScript 4.8 iteration plan for more details on what the TypeScript team is currently working on. To start using the TypeScript 4.8 nightly builds, install the TypeScript Nightly extension.",
    ],
  ];

  return (
    <div className="container-xxl">
      <div className="col-12">
        <h1 className="lead fs-3">The last updates</h1>
        <p className="lead">
          Keeping your software up to date is one of the most important things
          you can do to maintain your product's security.
        </p>

        <table class="table table-bordered border-muted">
          <thead>
            <tr>
              <th>Release</th>
              <th>What changed</th>
            </tr>
          </thead>
          <tbody>
            {table_text.map((x) => (
              <tr>
                <th className="col-1 col-sm-1">{x[0]}</th>
                <td dangerouslySetInnerHTML={{ __html: x[1] }}></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Updates;
