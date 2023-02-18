import Prices from "../components/Prices";
import Faq from "../components/Faq";

function Pricing() {
  return (
    <>
      <Prices />
      <h1 className="text-center my-4 display-4 fw-bold d-none d-sm-block">
        Features
      </h1>

      <div className="col-12 col-lg-10 col-xxl-9 mx-auto d-none d-sm-block">
        <table className="table mx-auto my-4s">
          <thead>
            <tr>
              <th></th>
              <th>Individual</th>
              <th>Business</th>
              <th>Professional</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Price</th>
              <td>Absolutely Free</td>
              <td>45$</td>
              <td>250$</td>
            </tr>
            <tr>
              <th>Commercial companies</th>
              <td></td>
              <td>✔</td>
              <td>✔</td>
            </tr>
            <tr>
              <th>Educational institutions</th>
              <td>✔</td>
              <td>✔</td>
              <td>✔</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="col-12 d-none d-sm-block">
        <Faq />
      </div>
    </>
  );
}

export default Pricing;
