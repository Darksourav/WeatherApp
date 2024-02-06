import React from "react";
import { Link } from "react-router-dom";
import BasicButtonExample from "./BasicButtonExample"
function Home(props) {
  return (
  
    <div className="Navigation">
      <nav>
          <ul>
            <li>
              <Link to="/home">Home
              </Link>
            </li>
            <li>
              <Link to="/home">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <div className="butt">
              <Link to="/login"><button className="btn">Login</button></Link>
              <Link to="/signup"><button className="btn">Signup</button></Link>
             </div> 
          </ul>
          
      </nav>
    <div className="Title">
      <h3>Welcome -{props. name} </h3>
      
      </div>
    </div>
  );
}

export default Home;
