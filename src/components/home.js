import React, { Component } from "react";

import "../styles/app.scss";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="welcome">
            <div className="report">
              <h1>
                <a href="/" className="logo">
                  iReporter!
                </a>
              </h1>
            </div>

            <p>
              <em>Breaking the corruption chain together</em>
            </p>
            <p>
              <em>login to report an incident</em>
            </p>
            <p>
              <a href="login" className="cat-btn">
                login
              </a>
            </p>
            <h3>
              <a href="signup">SignUp here</a>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
