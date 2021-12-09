import React from "react";
// import "./styles.css";
import Profile from "./ppppp.jpg"

function MiddleText() {

    const style = {
        "fontFamily": " 'Merriweather', 'serif' ",
         "fontWeight": "bolder", 
         "fontSize":  "2rem"
    }

    const contentStyle = {
      "margin": "10%",
      "textAlign": "justify",
      "padding": "0 10% 0 10%",
      "wordSpacing": "0.8rem",
      "fontFamily": "Public Sans, sans-serif",
      "fontSize": "1rem"
    }

    return (
        <div className="middle">

        <div className="container">
          <div className="row">
            <div id="p-img">

              <img src={Profile} alt="My Pic Goes Here!" />

            </div>
  
            <div id="p-text">
              <p style={style}>About</p>
  
              <div id="about-text">
                  <p  style={contentStyle}>
                    Myself Purushothaman, Web Developer and Designer from Tamil Nadu, India. Have knowledge of Python and Flutter.
                  </p>
              </div>
            </div>
  
            <a href="/contact"><button id="contact-btn" type="button" className="btn btn-dark">CONTACT</button></a>
  
          </div>
        </div>
      </div>
    );
}

export default MiddleText;