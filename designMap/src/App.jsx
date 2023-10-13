import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "../src/assets/components/navbar";
import number1 from "../src/assets/number1.svg";
import number2 from "../src/assets/number2.svg";

import number3 from "../src/assets/number3.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="landing">
        <div className="landingLeft">
          <div className="landingLeftBlock">
            <p className="landingLeftBlockTitle">
              Its time to change the ride experience
            </p>
            <p className="landingLeftBlockSmallText">
              Greater comfort. Stronger performance, Improved safety. No
              compromises
            </p>
            <input placeholder="Enter pickup location" type="text" />
            <input placeholder="Enter pickup location" type="text" />
            <button>button</button>
          </div>
        </div>
        <div className="landingRight">
          <div className="backgroundImage"></div>
        </div>
      </div>
      <div className="test">
        <h1 className="title">How it works</h1>
        <div className="howItWorks">
          <div className="howItWorksBlock">
            <img src={number1} alt="" />
            <div>
              <p className="howItWorsBlockTitle">Voer begin locatie in</p>
              <p className="howItWorsBlockText">
                Door uw begin locatie in te voeren kunnen wij kijken waar uw
                route start
              </p>
            </div>
          </div>
          <div className="howItWorksBlock">
            <img src={number2} alt="" />
            <div>
              <p className="howItWorsBlockTitle">Voer eind locatie in</p>
              <p className="howItWorsBlockText">
                Door uw eind locatie in te voeren kunnen wij kijken waar uw
                route eindigd
              </p>
            </div>
          </div>
          <div className="howItWorksBlock">
            <img src={number3} alt="" />
            <div>
              <p className="howItWorsBlockTitle">nu gaan we het berekenen</p>
              <p className="howItWorsBlockText">
                we gaan nu berekenen hoe lang het heeft geduurd
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footerLeft">HitchTracker</div>
        <div className="footerRight">
          Phasellus eu arcu tellus. Phasellus molestie luctus euismod. In ac
          viverra elit. Maecenas euismod tempor lobortis. Phasellus aliquet
          ipsum purus,
        </div>
      </div>
    </>
  );
}

export default App;
