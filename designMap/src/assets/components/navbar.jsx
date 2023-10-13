import { useState } from "react";

import "../../App.css";

function Navbar() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="navbar">
        <div className="navbarLeft">HitchTracker</div>
        <div className="navbarRight">
          <ul>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
