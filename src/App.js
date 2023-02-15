import Header from "./components/Header.js";
import MainPage from "./pages/Mainpage.js";
import Footer from "./components/Footer.js";
import Information from "./pages/Information.js";
import Download from "./pages/Download.js";
import Pricing from "./pages/Pricing.js";
import { Switch, Route } from "react-router-dom";
import Faq_page from "./pages/Faq_page.js";
import Updates from "./pages/Updates.js";
import Blog from "./pages/Blog.js";
import Extensions from "./pages/Extensions.js";

function App() {
  return (
    <div className="App">
      <style>
        {`
          .gradient-text {
            background: linear-gradient(270deg,#db59ff 8.88%,#6870de 52.13%,#2ecae6 86.08%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            }

            .gradient-text-orange{
              background: linear-gradient(-45deg,#FF0EB0 20.13%,#FFC002 86.08%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }

            .gradient-text-purple{
              background: linear-gradient(to top, #c471f5 0%, #fa71cd 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }

            .gradient-text-red{
              background-image: linear-gradient(to right, #ff0844 0%, #ffb199 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
            
            
            .gradient-shadow-box {
              border-radius:30px;
              box-shadow:
              rgb(157 90 241 / 40%) 80px 60px 60px -50px,
              rgb(113 0 255 / 18%) 85.25px -40px 119.217px -40px,
              rgb(109 200 253 / 65%) -38px -19.9805px 95.9063px -21.3125px,
              rgb(0 161 255 / 27%) -29.3047px 38.6289px 53.2812px -21.3125px,
              rgb(0 0 0 / 8%) 0px 18.9474px 23.6842px -4.73684px,
              rgb(0 0 0 / 10%) 0px 0px 0px 0.5px inset;
             }

             .gradient-inner-color-box{
                background-color: #4158D0;
                background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
              }
              img{
                user-select: none;
              }
                  
        `}
      </style>

      <Header />

      <Switch>
        <Route exact path={"/"}>
          <MainPage />
        </Route>

        <Route exact path={"/information"}>
          <Information />
        </Route>

        <Route exact path={"/download"}>
          <Download />
        </Route>

        <Route exact path={"/pricing"}>
          <Pricing />
        </Route>

        <Route exact path={"/updates"}>
          <Updates />
        </Route>

        <Route exact path={"/faq"}>
          <Faq_page />
        </Route>

        <Route exact path={"/blog"}>
          <Blog />
        </Route>

        <Route exact path={"/extensions"}>
          <Extensions />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
