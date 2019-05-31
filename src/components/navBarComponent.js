import React, { Component } from "react";
import "../styles/incidents.scss";

class NavbarComponent extends Component {
  constructor(props) {
    super(props);
  }
  logout = () => {
    let { history } = this.props;
    sessionStorage.clear();
    history.push("/login");
  };
  render() {
    return (
      <div>
        <div className="home-container">
          <nav
            className="navbar navbar-expand-lg navbar-light bg-primary"
            id="topNav"
          >
            <a className="navbar-brand" href="/" style={{ color: "white" }}>
              <h2>iReporter</h2>
            </a>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item" />
                <li className="nav-item">
                  <a className="nav-link" href="/create" style={{ color: "white" }}>
                    Create
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={this.logout}
                    style={{ color: "white" }}
                  >
                    logout
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default NavbarComponent;
